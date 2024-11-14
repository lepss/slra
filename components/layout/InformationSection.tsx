import clsx from "clsx";
import Image from "next/image";

export const InformationSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx("container flex flex-row gap-16 py-10", className)}
      id="presentation-section"
    >
      <div className="flex flex-col justify-center gap-8 lg:w-1/2">
        <h2 className="uppercase text-3xl font-bold tracking-wider md:text-5xl">
          Presentation
        </h2>
        <p className="text-justify">
          The international symposium{" "}
          <span className="font-bold">
            “Sur les routes d&apos;Arabie: itinéraires terrestres et maritimes”
          </span>{" "}
          is organized by the inter-university association Routes de
          l&apos;Orient in partnership with the Institut du Monde Arabe and the
          Archaïos company. It will be held at the Institut du Monde Arabe on
          December 12, 13 and 14, 2024.
        </p>
        <p className="text-justify">
          The aim of the symposium is to study the land and maritime routes of
          the Arabian Peninsula and the exchanges they facilitated through
          archaeology, history, philology, religious studies and the life
          sciences. This approach will be taken in the long term, from the
          Bronze Age to the Islamic period. The symposium will also explore the
          networks of exchanges with border regions such as the Indian
          subcontinent, the Horn of Africa and Egypt, as well as with the
          empires of the Ancient Near East and the Greek and Roman empires.
        </p>
        <p className="text-justify">
          This vast topic, whose strength lies in its interdisciplinary and
          diachronic approach, will be of interest to researchers and doctoral
          students from various French and foreign laboratories. It is also
          intended as a meeting place for experienced researchers, young
          researchers and students. This multidisciplinary and transdisciplinary
          approach will encourage exchanges between disciplines during the
          symposium, in line with current scientific approaches.
        </p>
      </div>
      <div className="hidden lg:flex justify-center lg:w-1/2">
        <Image
          className="w-full h-auto object-contain"
          src="/img/Bateau.png"
          alt="Background Image"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};
