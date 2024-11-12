interface EmailTemplateProps {
  firstName: string;
  lastname: string;
  email: string;
  affiliation: string;
  message: string;
}

export const EmailTemplateInscription: React.FC<
  Readonly<EmailTemplateProps>
> = ({ firstName, lastname, affiliation, message }) => (
  <div>
    <p>
      Cher/chère {firstName} {lastname}
    </p>
    <p>
      Nous avons le plaisir de confirmer votre inscription au colloque &quot;Sur
      les routes d&apos;Arabie&quot;. Nous vous remercions de vous être inscrit
      et sommes ravis de vous compter parmi les participants à cet événement.
    </p>
    <p>
      Nous avons hâte de vous accueillir et espérons que vous apprécierez les
      sessions et les échanges durant le colloque.
    </p>
    <p>
      Si vous avez des questions ou besoin d&apos;informations supplémentaires,
      n&apos;hésitez pas à nous contacter.
    </p>
    <p>Cordialement,</p>
    <p>Josselin Pinot & Sterenn Le Maguer-Gillon</p>
    <p>-------------</p>
    <p>
      Dear {firstName} {lastname},
    </p>
    <p>
      We are pleased to confirm your successful registration for the &quot;On
      the Roads of Arabia&quot; symposium. Thank you for signing up, and we are
      delighted to have you join us for this exciting event.
    </p>
    <p>
      We look forward to welcoming you and hope you enjoy the conference
      sessions and discussions.
    </p>
    <p>
      If you have any questions or need further information, please don&pos;t
      hesitate to reach out.
    </p>
    <p>Best regards,</p>
    <p>Josselin Pinot & Sterenn Le Maguer-Gillon</p>
  </div>
);

export const EmailTemplateNotification: React.FC<
  Readonly<EmailTemplateProps>
> = ({ firstName, lastname, email, affiliation, message }) => (
  <div>
    <h1>Nouvelle inscription - Sur les Routes d&apos;Arabie</h1>
    <p>
      <strong>Nom :</strong> {lastname}
    </p>
    <p>
      <strong>Prénom :</strong> {firstName}
    </p>
    <p>
      <strong>Email :</strong> {email}
    </p>
    <p>
      <strong>Affiliation :</strong> {affiliation}
    </p>
    <p>
      <strong>Message :</strong> {message}
    </p>
  </div>
);
