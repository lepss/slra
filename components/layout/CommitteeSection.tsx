import clsx from "clsx";

export const CommitteeSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx("container flex flex-row gap-16 py-10", className)}
      id="presentation-section"
    >
      <div className="flex flex-col justify-center gap-8 lg:w-1/2">
        <h2 className="uppercase text-3xl font-bold md:text-5xl">Committee</h2>
        <h3>Scientific</h3>
        <ul>
          <li>Dr. Nasser Al-Jahwari - Sultan Qaboos University </li>
          <li>Dr. Abdulrahman Alsuhaibani - The Royal Commission for AlUla </li>
          <li>Mme. Marianne Cotty - Musée du Louvre </li>
          <li>Dr. Jessica Giraud - Archaïos </li>
          <li>Dr. Marta Luciani - Universität Wien </li>
          <li>
            Dr. Laïla Nehmé - Centre National de la Recherche Scientifique{" "}
          </li>
          <li>Dr. Seth Priestman - Durham University </li>
          <li>
            Dr. Jérôme Rohmer - Centre National de la Recherche Scientifique{" "}
          </li>
          <li>Dr. Irene Rossi - Consiglio Nazionale delle Ricerche </li>
          <li>
            Dr. Jérémie Schiettecatte - Centre National de la Recherche
            Scientifique{" "}
          </li>
        </ul>
        <h3>Organising</h3>
        <ul>
          <li>
            M. Josselin Pinot - Université Paris I Panthéon Sorbonne - CNRS -
            Archaïos
          </li>
          <li>
            Dr. Sterenn Le Maguer-Gillon - Université de Lausanne - Archaïos -
            CEFREPA
          </li>
        </ul>
      </div>
    </section>
  );
};
