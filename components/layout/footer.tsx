import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const logos = [
    {
      alt: "RdO",
      src: "/img/logos-partenaires/RdO-logo-noir.png",
      width: 100,
      height: 100,
    },
    {
      alt: "Archaios",
      src: "/img/logos-partenaires/Archaios-logo-noir.png",
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
      alt: "CEFREPA",
      src: "/img/logos-partenaires/cefrepa-logo-noir.png",
      width: 50,
      height: 50,
    },
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
      alt: "Monde Antiques et Médiévaux",
      src: "/img/logos-partenaires/Mondes-antiques-medievaux-logo-noir.png",
      width: 80,
      height: 80,
    },
    {
      alt: "Orient et Méditerranée",
      src: "/img/logos-partenaires/Orient-mediterranee-logo-noir.png",
      width: 100,
      height: 100,
    },
  ];
  return (
    <footer className="flex flex-col justify-center items-center gap-10 p-4 bg-gray-800 text-white">
      <div className="flex gap-20 mt-10 flex-wrap justify-center">
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
      <div className="mt-4 md:mt-0 flex space-x-20">
        <Link href={"/contact"}>
          <p className="underline hover:opacity-90">Contact</p>
        </Link>
        <Link href={"/privacy"}>
          <p className="underline hover:opacity-90">Privacy Policy</p>
        </Link>
      </div>
    </footer>
  );
};
