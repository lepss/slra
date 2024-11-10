"use client";
import { Download } from "lucide-react";
import { useState } from "react";

export const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000); // Exemple pour simuler le téléchargement
  };

  return (
    <a
      href="/doc/Programme_Routes_Arabie_2024_A4_v4.pdf"
      download
      onClick={handleDownload}
    >
      <div className="flex items-center justify-center rounded-md border-orange border-2 px-6 py-4 text-center hover:opacity-90">
        <Download className="text-secondary mr-3" size={24} />
        <p className="text-xl font-bold text-secondary">Download Program</p>
      </div>
    </a>
  );
};
