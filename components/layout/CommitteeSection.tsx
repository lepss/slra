import clsx from "clsx";
import Image from "next/image";

export const CommitteeSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx("bg-green text-secondary py-10", className)}
      id="committee-section"
    >
      <div className="container py-10 flex flex-row gap-16">
        <div className="hidden lg:flex justify-center lg:w-1/2">
          <Image
            className="w-full h-auto object-contain"
            src="/img/Caravane.png"
            alt="Background Image"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <h2 className="uppercase text-3xl font-bold tracking-wider md:text-5xl">
            Committee
          </h2>
          <h3 className="text-xl font-bold underline underline-offset-2">
            Scientific
          </h3>
          <ul>
            <li>
              <b>Dr. Nasser Al-Jahwari</b> - Sultan Qaboos University{" "}
            </li>
            <li>
              <b>Dr. Abdulrahman Alsuhaibani</b> - The Royal Commission for
              AlUla{" "}
            </li>
            <li>
              <b>Mme. Marianne Cotty</b> - Musée du Louvre{" "}
            </li>
            <li>
              <b>Dr. Jessica Giraud</b> - Archaïos{" "}
            </li>
            <li>
              <b>Dr. Marta Luciani</b> - Universität Wien{" "}
            </li>
            <li>
              <b>Dr. Laïla Nehmé</b> - Centre National de la Recherche
              Scientifique{" "}
            </li>
            <li>
              <b>Dr. Seth Priestman</b> - Durham University{" "}
            </li>
            <li>
              <b>Dr. Jérôme Rohmer</b> - Centre National de la Recherche
              Scientifique{" "}
            </li>
            <li>
              <b>Dr. Irene Rossi</b> - Consiglio Nazionale delle Ricerche{" "}
            </li>
            <li>
              <b>Dr. Jérémie Schiettecatte</b> - Centre National de la Recherche
              Scientifique{" "}
            </li>
          </ul>
          <h3 className="text-xl font-bold underline underline-offset-2">
            Organising
          </h3>
          <ul>
            <li>
              <b>M. Josselin Pinot</b> - Université Paris I Panthéon Sorbonne -
              CNRS - Archaïos
            </li>
            <li>
              <b>Dr. Sterenn Le Maguer-Gillon</b> - Université de Lausanne -
              Archaïos - CEFREPA
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
