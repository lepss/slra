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
          {/* <Image
            className="w-full h-auto object-contain"
            src="/img/Caravane.png"
            alt="Background Image"
            width={600}
            height={600}
          /> */}
        </div>
        <div className="flex flex-col justify-center gap-8 lg:w-1/2">
          <h2 className="uppercase text-3xl font-bold tracking-wider md:text-5xl">
            Committee
          </h2>
          <h3 className="text-2xl font-bold underline underline-offset-2">
            Scientific
          </h3>
          <ul>
            <li>
              <b>Dr. Nasser Al-Jahwari</b> -{" "}
              <span className="italic">Sultan Qaboos University </span>
            </li>
            <li>
              <b>Dr. Abdulrahman Alsuhaibani</b> -{" "}
              <span className="italic">The Royal Commission for AlUla </span>
            </li>
            <li>
              <b>Mme. Marianne Cotty</b> -{" "}
              <span className="italic">Musée du Louvre </span>
            </li>
            <li>
              <b>Dr. Jessica Giraud</b> -{" "}
              <span className="italic">Archaïos </span>
            </li>
            <li>
              <b>Dr. Marta Luciani</b> -{" "}
              <span className="italic">Universität Wien </span>
            </li>
            <li>
              <b>Dr. Laïla Nehmé</b> -{" "}
              <span className="italic">
                Centre National de la Recherche Scientifique{" "}
              </span>
            </li>
            <li>
              <b>Dr. Seth Priestman</b> -{" "}
              <span className="italic">Durham University </span>
            </li>
            <li>
              <b>Dr. Jérôme Rohmer</b> -{" "}
              <span className="italic">
                Centre National de la Recherche Scientifique{" "}
              </span>
            </li>
            <li>
              <b>Dr. Irene Rossi</b> -{" "}
              <span className="italic">
                Consiglio Nazionale delle Ricerche{" "}
              </span>
            </li>
            <li>
              <b>Dr. Jérémie Schiettecatte</b> -{" "}
              <span className="italic">
                Centre National de la Recherche Scientifique{" "}
              </span>
            </li>
          </ul>
          <h3 className="text-2xl font-bold underline underline-offset-2">
            Organising
          </h3>
          <ul>
            <li>
              <b>M. Josselin Pinot</b> -{" "}
              <span className="italic">
                Université Paris I Panthéon Sorbonne - CNRS - Archaïos
              </span>
            </li>
            <li>
              <b>Dr. Sterenn Le Maguer-Gillon</b> -{" "}
              <span className="italic">
                Université de Lausanne - Archaïos - CEFREPA
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
