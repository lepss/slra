import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-center gap-36 justify-center text-white pb-40"
      style={{
        backgroundImage: 'url("/img/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-secondary opacity-50 z-0"></div>
      <Image
        className="z-10 mt-40 px-10"
        src={"/img/Titre Sur le Routes d'Arabie crop.png"}
        alt=""
        width={800}
        height={800}
      />

      <div className="relative z-10 mb-20 flex flex-col gap-20 md:flex-row">
        <Link href="/register">
          <div className="rounded-md bg-orange px-6 py-4 text-center hover:opacity-90">
            <p className="text-xl font-bold text-secondary">Register</p>
          </div>
        </Link>
        <Link href="/programme">
          <div className="rounded-md bg-orange px-6 py-4 text-center hover:opacity-90">
            <p className="text-xl font-bold text-secondary">Program</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
