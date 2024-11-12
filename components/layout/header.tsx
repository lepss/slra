"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "#presentation-section", label: "Presentation" },
  { href: "#committee-section", label: "Committee" },
  { href: "#partners-section", label: "Partners" },
  { href: "#venue-section", label: "Venue" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Empêcher le défilement de la page lorsque le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      // Ajoute overflow-hidden au body
      document.body.style.overflow = "hidden";
    } else {
      // Retire overflow-hidden du body
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between p-4 md:px-8 bg-light-beige mx-5">
      {/* Logo principal */}
      <Link href="/">
        <Image
          src={"/img/Logo-titre.png"}
          alt={"logo"}
          width={200}
          height={200}
          objectFit="contain"
        />
      </Link>

      {/* Navigation principale pour les écrans moyens et grands */}
      <nav className="hidden text-md lg:flex md:flex-grow md:justify-around uppercase">
        {links.map(({ href, label }) => (
          <Link
            key={`${href}${label}`}
            href={href}
            passHref
            className={`flex items-center gap-1text-primary-50 hover:text-muted-foreground 
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Bouton Register pour les écrans moyens et grands */}
      <Link href="#register-section" passHref>
        <div className="hidden lg:flex items-center justify-center rounded-md bg-orange px-6 py-4 text-center text-xl font-bold text-secondary hover:opacity-90">
          Register
        </div>
      </Link>

      {/* Bouton Menu pour les écrans mobiles */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-xl font-bold focus:outline-none"
        >
          <MenuIcon size={32} />
        </button>
      </div>

      {/* Menu en plein écran pour les écrans mobiles avec transition de fondu */}
      <div
        className={`fixed inset-0 bg-light-beige p-4 flex flex-col items-center justify-center gap-8 md:hidden z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Logo dans le menu */}
        <Link href="/" passHref>
          <Image
            src={"/img/Logo-titre.png"}
            alt={"logo"}
            width={150}
            height={150}
            objectFit="contain"
            onClick={() => setIsOpen(false)} // Ferme le menu au clic sur le logo
          />
        </Link>

        {/* Éléments du menu */}
        <nav className="flex flex-col items-center gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              href={href}
              passHref
              className={`block text-2xl uppercase ${
                pathname === href
                  ? "text-orange"
                  : "text-primary-50 hover:text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              {label}
            </Link>
          ))}
          {/* Bouton Register dans le menu */}
          <Link href="#register-section" passHref>
            <div
              className="flex items-center justify-center rounded-md bg-orange px-6 py-4 text-center text-2xl font-bold text-secondary hover:opacity-90 mt-4"
              onClick={() => setIsOpen(false)} // Ferme le menu après un clic
            >
              Register
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};
