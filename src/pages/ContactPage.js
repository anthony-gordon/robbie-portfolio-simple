import "../style/pages/ContactPage.css";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Helmet>
        <title>Robbie Motion - Get in contact</title>
        <meta
          name="description"
          content={`Get in contact with Robbie Motion - painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      <h2 className="ContactPage__h2">Get in contact</h2>
      <ContactForm />
    </div>
  );
}
export default ContactPage;
