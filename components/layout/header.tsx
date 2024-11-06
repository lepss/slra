"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/program", label: "Program" },
  { href: "/venue", label: "Venue" },
  { href: "/practical", label: "Practical Information" },
  { href: "/register", label: "Register" },
  { href: "/conference-proceedings", label: "Conference Proceedings" },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between p-4 md:px-8 bg-white shadow-md">
      <Link href="/">
        <Image
          src={"/img/Logo-titre.png"}
          alt={"logo"}
          width={200}
          height={200}
          objectFit="contain"
        />
      </Link>
      <nav className="hidden text-md md:flex md:flex-grow md:justify-around uppercase">
        {links.map(({ href, label }) => (
          <Link
            key={`${href}${label}`}
            href={href}
            className={`flex items-center gap-1 ${
              pathname === href
                ? " text-orange"
                : "text-primary-50 hover:text-muted-foreground"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="md:hidden text-xl font-bold">Menu</div>
    </header>
  );
};
