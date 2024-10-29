import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center px-8 mb-20">
      <div className="hidden items-center space-x-4 md:flex">
        <Image
          src="/img/caravane.png"
          alt="Icon Left"
          width={250}
          height={250}
        />
      </div>
      <div className="flex items-center m-auto space-x-4">
        <Image
          src="/img/logo-titre.png"
          alt="Image titre"
          width={400}
          height={400}
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
      <div className="hidden items-center space-x-4 md:flex">
        <Image
          src="/img/bateau.png"
          alt="Icon Right"
          width={250}
          height={250}
        />
      </div>
    </header>
  );
};
