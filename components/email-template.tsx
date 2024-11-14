interface EmailTemplateProps {
  firstName: string;
  lastname: string;
  email: string;
  affiliation: string;
  message: string;
  selectedDates: string[];
}

export const EmailTemplateInscription: React.FC<
  Readonly<EmailTemplateProps>
> = ({ firstName, lastname, affiliation, message }) => (
  <div
    style={{
      backgroundColor: "#F6F2E6", // beige background
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      fontSize: "20px",
      color: "#333",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        maxWidth: "800px",
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="https://www.surlesroutesdarabie.com/_next/image?url=%2Fimg%2FLogo-titre.png&w=256&q=75" // Replace with your logo's URL
          alt="SLRA Logo"
          style={{ maxWidth: "800px" }}
        />
      </div>
      <p style={{ marginBottom: "30px" }}>
        Cher/chère{" "}
        <strong>
          {firstName} {lastname}
        </strong>
        ,
      </p>
      <p style={{ marginBottom: "20px" }}>
        Nous avons le plaisir de confirmer votre inscription au colloque
        <strong>&quot;Sur les routes d&apos;Arabie&quot;</strong>. Nous vous
        remercions de vous être inscrit et sommes ravis de vous compter parmi
        les participants à cet événement.
      </p>
      <p style={{ marginBottom: "20px" }}>
        Nous avons hâte de vous accueillir et espérons que vous apprécierez les
        sessions et les échanges durant le colloque.
      </p>
      <p style={{ marginBottom: "20px" }}>
        Si vous avez des questions ou besoin d&apos;informations
        supplémentaires, n&apos;hésitez pas à nous contacter.
      </p>
      <p style={{ marginBottom: "30px" }}>Cordialement,</p>
      <p style={{ fontStyle: "italic" }}>
        Josselin Pinot & Sterenn Le Maguer-Gillon
      </p>
      <p style={{ marginBottom: "30px", marginTop: "30px" }}>
        -------------------------
      </p>
      <p style={{ marginBottom: "30px" }}>
        Dear{" "}
        <strong>
          {firstName} {lastname}
        </strong>
        ,
      </p>
      <p style={{ marginBottom: "20px" }}>
        We are pleased to confirm your successful registration for the{" "}
        <strong>&quot;On the Roads of Arabia&quot;</strong> symposium. Thank you
        for signing up, and we are delighted to have you join us for this
        exciting event.
      </p>
      <p style={{ marginBottom: "20px" }}>
        We look forward to welcoming you and hope you enjoy the conference
        sessions and discussions.
      </p>
      <p style={{ marginBottom: "20px" }}>
        If you have any questions or need further information, please don&apos;t
        hesitate to reach out.
      </p>
      <p style={{ marginBottom: "30px" }}>Best regards,</p>
      <p style={{ fontStyle: "italic" }}>
        Josselin Pinot & Sterenn Le Maguer-Gillon
      </p>
    </div>
  </div>
);

export const EmailTemplateNotification: React.FC<
  Readonly<EmailTemplateProps>
> = ({ firstName, lastname, email, affiliation, message, selectedDates }) => (
  <div
    style={{
      backgroundColor: "#F6F2E6", // beige background
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      color: "#333",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        maxWidth: "800px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="https://www.surlesroutesdarabie.com/_next/image?url=%2Fimg%2FLogo-titre.png&w=256&q=75" // Replace with your logo's URL
          alt="SLRA Logo"
          style={{ maxWidth: "800px" }}
        />
      </div>

      <h3>Nouvelle inscription - Sur les Routes d&apos;Arabie</h3>
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
        <strong>Dates :</strong>
        <ul>
          {selectedDates.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </ul>
      </p>
      <p>
        <strong>Message :</strong> {message}
      </p>
    </div>
  </div>
);
