interface EmailTemplateProps {
  firstName: string;
  lastname: string;
  affiliation: string;
  massage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastname,
  affiliation,
  massage,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
