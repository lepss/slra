import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const buttons = [
    {
      label: "Programme",
      link: "/programme",
      image: "/img/logo.png",
    },
    { label: "Venue", link: "/venue", image: "/img/logo.png" },
    {
      label: "Practical Info",
      link: "/practical",
      image: "/img/logo.png",
    },
    { label: "Register", link: "/register", image: "/img/logo.png" },
    {
      label: "Conference Proceedings",
      link: "/conference-proceedings",
      image: "/img/logo.png",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 justify-center py-16 container md:flex-row align-top">
      {buttons.map((button, index) => (
        <div key={index} className="text-center">
          <Link
            href={button.link}
            className="flex flex-col items-center min-w-36 max-w-44"
          >
            <Image
              src={button.image}
              alt={button.label}
              width={130}
              height={130}
              className="rounded-full bg-secondary"
            />
            <p className="mt-4 text-xl">{button.label}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
