// app/api/register/route.ts

import prisma from "@/lib/prisma";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

type RegistrationRequestBody = {
  lastname: string;
  firstname: string;
  email: string;
  affiliation: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const {
      lastname,
      firstname,
      email,
      affiliation,
      message,
    }: RegistrationRequestBody = await req.json();

    // Enregistrer dans la base de données
    const registration = await prisma.registration.create({
      data: { lastname, firstname, email, affiliation, message },
    });

    // console.log(process.env.SENDGRID_API_KEY);
    // Envoyer un email de notification
    const msg = {
      to: "a.miotton@gmail.com",
      from: "a.miotton@gmail.com",
      subject: `Nouvelle inscription de ${firstname} ${lastname}`,
      text: `Nouvelle inscription :\nNom: ${lastname}\nPrenom: ${firstname}\n Email: ${email}\n`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Erreur d’envoi d’email" },
      { status: 500 }
    );
  }
}
