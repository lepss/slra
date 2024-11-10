import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface RequestBody {
  lastname: string;
  firstname: string;
  email: string;
  affiliation: string;
  message: string;
}

export async function POST(request: Request) {
  const { lastname, firstname, email, affiliation, message }: RequestBody =
    await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // Envoi de l'e-mail pour l'administrateur
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "Nouvelle inscription sur votre formulaire",
      text: `Nouvelle inscription de : ${firstname} ${lastname}\nEmail: ${email}\nAffiliation: ${affiliation}\nMessage: ${message}`,
    });

    // Envoi de l'e-mail de confirmation pour l'utilisateur
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Confirmation de votre inscription",
      text: `Bonjour ${firstname},\n\nMerci pour votre inscription ! Nous vous tiendrons informé de nos prochaines étapes.\n\nCordialement,\nL'équipe.`,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi des e-mails", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi des e-mails" },
      { status: 500 }
    );
  }
}
