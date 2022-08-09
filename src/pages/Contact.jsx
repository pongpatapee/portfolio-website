import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_website",
        "portfolio_template",
        form.current,
        "gcAEfssdZakDEBxM7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message received, Thank you!")
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen border-4 border-black">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input className="border border-black" type="text" name="user_name" placeholder="Full Name" />
        <label>Email</label>
        <input className="border border-black" type="email" name="user_email" placeholder="example@email.com" />
        <label>Message</label>
        <textarea className="border border-black" name="message" placeholder="Your Message" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
