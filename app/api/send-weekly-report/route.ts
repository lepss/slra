// app/api/send-weekly-report/route.ts

import { generateAndSendWeeklyReport } from "@/lib/weeklyReport"; // Assurez-vous que le chemin vers cette fonction est correct
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await generateAndSendWeeklyReport();
    return NextResponse.json(
      { message: "Rapport envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du rapport" },
      { status: 500 }
    );
  }
}
