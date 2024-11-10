// // app/api/daily-recap/route.ts

// import prisma from "@/lib/prisma";
// import sgMail from "@sendgrid/mail";
// import fs from "fs";
// import { NextResponse } from "next/server";
// import path from "path";
// import XLSX from "xlsx";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

// export async function GET() {
//   try {
//     // Récupérer toutes les inscriptions
//     const registrations = await prisma.registration.findMany();

//     // Formatage des données pour Excel
//     const formattedData = registrations.map((reg) => ({
//       lastname: reg.lastname,
//       firstname: reg.firstname,
//       Email: reg.email,
//       Affiliation: reg.affiliation,
//       Message: reg.message,
//       Date: reg.createdAt.toISOString(),
//     }));

//     // Création d'un fichier Excel
//     const workbook = XLSX.utils.book_new();
//     const worksheet = XLSX.utils.json_to_sheet(formattedData);
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Inscriptions");

//     // Enregistrer temporairement le fichier Excel
//     const filePath = path.join(process.cwd(), "inscriptions-daily.xlsx");
//     XLSX.writeFile(workbook, filePath);

//     // Configuration de l'email avec la pièce jointe
//     const msg = {
//       to: "a.miotton@gmail.com",
//       from: "a.miotton@gmail.com",
//       subject: "Récapitulatif quotidien des inscriptions",
//       text: "Veuillez trouver en pièce jointe le récapitulatif des inscriptions.",
//       attachments: [
//         {
//           content: fs.readFileSync(filePath).toString("base64"),
//           filename: "inscriptions-daily.xlsx",
//           type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//           disposition: "attachment",
//         },
//       ],
//     };

//     // Envoi de l'email
//     await sgMail.send(msg);

//     // Suppression du fichier temporaire
//     fs.unlinkSync(filePath);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { success: false, error: "Erreur d’envoi d’email" },
//       { status: 500 }
//     );
//   }
// }
