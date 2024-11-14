import {
  EmailTemplateInscription,
  EmailTemplateNotification,
} from "@/components/email-template";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  lastname: string;
  firstname: string;
  email: string;
  affiliation: string;
  message: string;
  consent: boolean;
  selectedDates: string[];
}

export async function POST(request: Request) {
  const {
    lastname,
    firstname,
    email,
    affiliation,
    message,
    consent,
    selectedDates,
  }: RequestBody = await request.json();

  // Enregistrer dans la base de données
  const registration = await prisma.registration.create({
    data: { lastname, firstname, email, affiliation, message, selectedDates },
  });

  try {
    // Envoi de l'email à la personne qui s'inscrit
    const { data: inscriptionData, error: inscriptionError } =
      await resend.emails.send({
        from: "no-reply@surlesroutesdarabie.com",
        to: email,
        subject: "Inscription confirmée - Sur les routes d'Arabie",
        react: EmailTemplateInscription({
          firstName: firstname,
          lastname: lastname,
          email: email,
          affiliation: affiliation,
          message: message,
          selectedDates: selectedDates,
        }),
      });

    if (inscriptionError) {
      return Response.json({ error: inscriptionError }, { status: 500 });
    }

    // Envoi de l'email de notification à vous-même
    const { data: notificationData, error: notificationError } =
      await resend.emails.send({
        from: "no-reply@surlesroutesdarabie.com",
        to: process.env.EMAIL_TO_NOTIFY || "", // Remplacez par votre adresse email
        subject: "Nouvelle inscription - Sur les routes d'Arabie",
        react: EmailTemplateNotification({
          firstName: firstname,
          lastname: lastname,
          email: email,
          affiliation: affiliation,
          message: message,
          selectedDates: selectedDates,
        }),
      });

    if (notificationError) {
      return Response.json({ error: notificationError }, { status: 500 });
    }

    // Retourner la réponse de succès si les deux emails ont été envoyés
    return Response.json({ inscriptionData, notificationData });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
