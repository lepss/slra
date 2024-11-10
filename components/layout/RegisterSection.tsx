import clsx from "clsx";
import ContactForm from "../ui/ContactForm";

export const RegisterSection = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("py-20", className)} id="register-section">
      <ContactForm />
    </div>
  );
};
