import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaEnvelope as EnvelopeIcon, FaWhatsapp as WhatsappIcon, FaFacebookMessenger as MessengerIcon, FaArrowRight } from "react-icons/fa"; // Utilisation d'alias pour éviter les doublons
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_c86lqvr",
        "template_v7ax7aq",
        form.current,
        "oWOVpS-iVoTp9hWHE"
      );

      setMessage("Votre message a bien été envoyé !");
      e.target.reset();
    } catch (error) {
      setMessage("Une erreur s'est produite, veuillez réessayer.");
      console.error("Erreur d'envoi :", error);
    }

    setLoading(false);
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">
        Obtenir bien plus <strong>😉</strong>
      </h2>
      <span className="section__subtitle">Me contacter 🤞</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Me parler ...</h3>

          <div className="contact__info">
            <div className="contact__card">
              <EnvelopeIcon size={30} className="contact__card-icon facebook" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">Frankamdev@gmail.com</span>
              <a href="mailto:frankamdev@gmail.com" className="contact__button">
                Écrivez-moi{" "}
                <FaArrowRight size={20} className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <WhatsappIcon size={30} className="contact__card-icon whatsapp" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+237 690 461 830</span>
              <a
                href="https://api.whatsapp.com/send?phone=+237690461830&text=Salut, comment ça va ?"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrivez-moi{" "}
                <FaArrowRight size={20} className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <MessengerIcon size={30} className="contact__card-icon messenger" />
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>
              <a
                href="https://m.me/user.fb123"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrivez-moi{" "}
                <FaArrowRight size={20} className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Écrivez-moi votre projet</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Name</label>
              <input
                type="text"
                name="from_name"
                className="contact__form-input"
                placeholder="Insert ton nom"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Email</label>
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert ton email"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Ecris ton message"
              ></textarea>
            </div>

            <input type="submit" value="Envoyer" className="button button--flex" />
          </form>

          {message && <p className="contact__message">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
