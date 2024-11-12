import fs from "fs/promises";
import { Parser } from "json2csv";
import path from "path";
import { Resend } from "resend";
import prisma from "./prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

async function fetchAllRegistrations() {
  return await prisma.registration.findMany();
}

async function generateCSVData(registrations: Array<any>): Promise<string> {
  const json2csv = new Parser();
  return json2csv.parse(registrations);
}

async function createTempCSV(data: string): Promise<string> {
  const filePath = path.join(__dirname, "all-registration.csv");
  await fs.writeFile(filePath, data);
  return filePath;
}

async function sendWeeklyReport(filePath: string) {
  try {
    console.log("Envoi de l'email avec pièce jointe...");

    const fileContent = await fs.readFile(filePath, { encoding: "base64" }); // Lire le fichier en base64

    const response = await resend.emails.send({
      from: "no-reply@surlesroutesdarabie.com",
      to: process.env.EMAIL_TO_NOTIFY || "", // Remplacez par votre adresse
      subject:
        "Rapport hebdomadaire des inscriptions - Sur les routes d'Arabie",
      text: "Veuillez trouver ci-joint le rapport hebdomadaire des inscriptions - Sur les routes d'Arabie.",
      attachments: [
        {
          filename: "all-registration.csv",
          content: fileContent, // Utilisation du contenu en base64
          contentType: "text/csv",
        },
      ],
    });

    console.log("Email envoyé avec succès :", response); // Confirmez l’envoi
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
  }
}

export async function generateAndSendWeeklyReport() {
  // Étape 1 : Récupérer les enregistrements de la dernière semaine
  const registrations = await fetchAllRegistrations();

  // Étape 2 : Convertir les données en CSV
  const csvData = await generateCSVData(registrations);

  // Étape 3 : Créer un fichier temporaire pour le CSV
  const filePath = await createTempCSV(csvData);

  try {
    // Étape 4 : Envoyer l'email avec le fichier en pièce jointe
    await sendWeeklyReport(filePath);
    console.log("Rapport hebdomadaire envoyé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'envoi du rapport hebdomadaire :", error);
  } finally {
    // Supprimer le fichier temporaire après l’envoi
    await fs.unlink(filePath);
  }
}
