import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 p-4 py-10 bg-green text-white">
      <div className="flex flex-col gap-5 md:flex-row mt-4 md:mt-0 space-x-20">
        <Link href="mailto:surlesroutesdarabie@gmail.com">
          <p className="underline hover:opacity-90 text-secondary">
            surlesroutesdarabie@gmail.com
          </p>
        </Link>
        <Link href={"/privacy"}>
          <p className="underline hover:opacity-90 text-secondary">
            Privacy Policy
          </p>
        </Link>
      </div>
    </footer>
  );
};
