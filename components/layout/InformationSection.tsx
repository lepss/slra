import clsx from "clsx";
import Image from "next/image";

export const InformationSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx("container flex flex-row gap-16 py-10", className)}
      id="presentation-section"
    >
      <div className="flex flex-col justify-center gap-8 lg:w-1/2">
        <h2 className="uppercase text-3xl font-bold md:text-5xl">
          Presentation
        </h2>
        <p>
          The international symposium{" "}
          <span className="font-bold">
            “Sur les routes d&apos;Arabie: itinéraires terrestres et maritimes”
          </span>{" "}
          is organized by the inter-university association Routes de
          l&apos;Orient in partnership with the Institut du Monde Arabe and the
          Archaïos company. It will be held at the Institut du Monde Arabe on
          December 12, 13 and 14, 2024.
        </p>
        <p>
          The aim of the symposium is to study the routes of the Arabian
          Peninsula, whether by land or sea, and the exchanges they have
          fostered through archaeology, the historical, philological and
          religious sciences, as well as the life sciences. This approach will
          be taken over the long term, from the Bronze Age to the Islamic
          period. The aim of this symposium is also to study the networks of
          exchanges with frontier regions such as the Indian sub-continent, the
          Horn of Africa and Egypt, as well as the empires of the Ancient Near
          East and the Greek and Roman empires.
        </p>
        <p>
          This vast theme, whose strong points are its interdisciplinary and
          diachronic approach, will be of interest to researchers,
          teacher-researchers and doctoral students from various French and
          foreign laboratories. The event is also intended as a meeting place
          for seasoned researchers, young researchers and students. This
          multi-disciplinary and trans-documentary approach will encourage
          exchanges between disciplines during the symposium, in line with
          current scientific approaches.
        </p>
      </div>
      <div className="hidden lg:flex justify-center lg:w-1/2">
        <Image
          // className="object-cover object-center"
          src="/img/Bateau.png"
          alt="Background Image"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};
