import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center flex-wrap 
                      border-4 light-dark-border max-w-6xl p-10"
      >
        <h1 className="text-center text-4xl pb-5">Get In Touch</h1>
        <div className="flex">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
