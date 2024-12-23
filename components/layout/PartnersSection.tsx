import Image from "next/image";

export const PartnersSection = () => {
  const logos01 = [
    {
      alt: "RdO",
      src: "/img/logos-partenaires/RdO-logo-noir.png",
      width: 200,
      height: 200,
    },
    {
      alt: "IMA",
      src: "/img/logos-partenaires/ima-logo-noir.png",
      width: 100,
      height: 100,
    },
    {
      alt: "Archaios",
      src: "/img/logos-partenaires/Archaios-logo-noir.png",
      width: 200,
      height: 200,
    },
  ];
  const logos02 = [
    {
      alt: "CVEC",
      src: "/img/logos-partenaires/CVEC-logo-noir.png",
      width: 200,
      height: 200,
    },
    {
      alt: "Sorbonne Université Lettres",
      src: "/img/logos-partenaires/Sorbonne-logo-noir.png",
      width: 200,
      height: 200,
    },
    {
      alt: "Afalula - French agency for Alula development",
      src: "/img/logos-partenaires/AFALULA_logo-BW.png",
      width: 200,
      height: 200,
    },
    {
      alt: "CEFREPA",
      src: "/img/logos-partenaires/cefrepa-logo-noir.png",
      width: 100,
      height: 100,
    },
    {
      alt: "Orient et Méditerranée",
      src: "/img/logos-partenaires/Orient-mediterranee-logo-noir.png",
      width: 200,
      height: 200,
    },
    {
      alt: "ARSCAN - Archéologies et Sciences de l'Antiquité",
      src: "/img/logos-partenaires/logo_arscan-BW.png",
      width: 200,
      height: 200,
    },
    {
      alt: "Monde Antiques et Médiévaux",
      src: "/img/logos-partenaires/Mondes-antiques-medievaux-logo-noir.png",
      width: 160,
      height: 160,
    },
  ];
  return (
    <section className=" my-10" id="partners-section">
      <div className="container flex flex-col justify-center items-center gap-10">
        <h2 className="uppercase text-3xl font-bold tracking-wider md:text-5xl">
          PARTNERS
        </h2>
        <p className="text-lg italic">
          The organizers thank all the partner institutions
        </p>
        <div className="flex gap-20 mt-10 flex-wrap justify-center">
          {logos01.map((logo, index) => (
            <div
              key={index}
              className="relative"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
        <p className="text-lg italic">
          with the support of the CVEC “Student Initiatives” commission of
          Sorbonne University
        </p>
        <div className="flex gap-20 mt-10 flex-wrap justify-center">
          {logos02.map((logo, index) => (
            <div
              key={index}
              className="relative"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
