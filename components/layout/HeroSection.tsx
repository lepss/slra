import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "../ui/DownloadButton";

export const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        "relative flex items-center justify-between min-h-[calc(100vh-80px)] text-white bg-green px-8",
        className
      )}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between text-white">
        {/* Section de texte et des boutons */}
        <div className="flex flex-col gap-6 lg:gap-12 lg:w-1/2">
          <h1 className="text-6xl font-bold text-left text-secondary leading-tight md:text-8xl">
            Sur les Routes d&apos;Arabie
          </h1>
          <div>
            <p className="text-2xl text-left text-secondary">
              Sur les routes d&apos;Arabie: itinéraires terrestres et maritimes
            </p>
            <p className="text-xl text-left font-thin text-secondary mt-4">
              12-13-14 décembre 2024 - Institut du Monde Arabe, Paris
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Bouton Register */}
            <Link href="#register-section" passHref>
              <div className="flex items-center justify-center rounded-md bg-orange px-6 py-4 text-center text-xl font-bold text-secondary hover:opacity-90 w-full md:w-auto">
                Register
              </div>
            </Link>
            {/* Bouton Download */}
            <DownloadButton />
          </div>
        </div>

        {/* Masque portrait pour l'image, masqué sur petits écrans */}
        <div className="hidden lg:flex justify-center lg:w-1/2">
          <Image
            // className="object-cover object-center"
            src="/img/Péninsule, bateau et caravane.png"
            alt="Background Image"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};
