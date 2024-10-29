import Image from "next/image";

export const Footer = () => {
  const logos = [
    {
      alt: "RdO",
      src: "/img/logos-partenaires/RdO-logo-noir.png",
      width: 50,
      height: 50,
    },
    {
      alt: "Archaios",
      src: "/img/logos-partenaires/Archaios-logo-noir.png",
      width: 50,
      height: 50,
    },
    {
      alt: "IMA",
      src: "/img/logos-partenaires/ima-logo-noir.png",
      width: 25,
      height: 25,
    },
    {
      alt: "CEFREPA",
      src: "/img/logos-partenaires/cefrepa-logo-noir.png",
      width: 25,
      height: 25,
    },
    {
      alt: "Sorbonne Université Lettres",
      src: "/img/logos-partenaires/sorbonne-logo-noir.png",
      width: 50,
      height: 50,
    },
    {
      alt: "CVEC",
      src: "/img/logos-partenaires/CVEC-logo-noir.png",
      width: 50,
      height: 50,
    },
    {
      alt: "Monde Antiques et Médiévaux",
      src: "/img/logos-partenaires/Mondes-antiques-medievaux-logo-noir.png",
      width: 40,
      height: 40,
    },
    {
      alt: "Orient et Méditerranée",
      src: "/img/logos-partenaires/Orient-mediterranee-logo-noir.png",
      width: 50,
      height: 50,
    },
  ];
  return (
    <footer className="py-8 px-4 flex justify-center mt-20">
      <div className="flex justify-evenly flex-1">
        {logos.map((logo, index) => (
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
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};
