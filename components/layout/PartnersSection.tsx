import Image from "next/image";

export const PartnersSection = () => {
  const logos01 = [
    {
      alt: "RdO",
      src: "/img/logos-partenaires/RdO-logo-noir.png",
      width: 100,
      height: 100,
    },
    {
      alt: "IMA",
      src: "/img/logos-partenaires/ima-logo-noir.png",
      width: 50,
      height: 50,
    },
    {
      alt: "Archaios",
      src: "/img/logos-partenaires/Archaios-logo-noir.png",
      width: 100,
      height: 100,
    },
  ];
  const logos02 = [
    {
      alt: "Sorbonne Université Lettres",
      src: "/img/logos-partenaires/sorbonne-logo-noir.png",
      width: 100,
      height: 100,
    },

    {
      alt: "CVEC",
      src: "/img/logos-partenaires/CVEC-logo-noir.png",
      width: 100,
      height: 100,
    },
    {
      alt: "CEFREPA",
      src: "/img/logos-partenaires/cefrepa-logo-noir.png",
      width: 50,
      height: 50,
    },
    {
      alt: "Orient et Méditerranée",
      src: "/img/logos-partenaires/Orient-mediterranee-logo-noir.png",
      width: 100,
      height: 100,
    },
    {
      alt: "Monde Antiques et Médiévaux",
      src: "/img/logos-partenaires/Mondes-antiques-medievaux-logo-noir.png",
      width: 80,
      height: 80,
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
              style={{ width: logo.width * 1.5, height: logo.height * 1.5 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width * 1.5}
                height={logo.height * 1.5}
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
              style={{ width: logo.width * 1.5, height: logo.height * 1.5 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width * 1.5}
                height={logo.height * 1.5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
