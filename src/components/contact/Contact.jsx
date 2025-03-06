import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

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
        "template_bh4lz4g",
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
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">Frankamdev@gmail.com</span>
              <a href="mailto:frankamdev@gmail.com" className="contact__button">
                Écrivez-moi{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+237 690 461 830</span>
              <a
                href="https://api.whatsapp.com/send?phone=+237690461830&text=Salut, comment ça va ?"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrivez-moi{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>
              <a
                href="https://m.me/user.fb123"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrivez-moi{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Écrivez-moi votre projet</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nom</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insérez votre nom"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insérez votre email"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Projet</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Écrivez votre idée de projet"
                required
              ></textarea>
            </div>

            <input
              type="submit"
              value={loading ? "Envoi en cours..." : "Envoyer"}
              className="button button--flex"
              disabled={loading}
            />
          </form>
          {message && <p className="contact__message">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
