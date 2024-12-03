import './Contact.scss';
import logo from '../../assets/hero/logo.png';

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section footer__logo">
            <a href="overview.html">
              <img alt="Footer Logo" src={logo} />
            </a>
            <p className="highlight">
              Pr&eacute;sent depuis 2008, KM Projets conseille les directions g&eacute;n&eacute;rales et
              op&eacute;rationnelles de grandes entreprises, ainsi que celles d&rsquo;institutions
              financi&egrave;res et organismes publiques.
            </p>
          </div>

          <navv className="footer__section footer__nav">
            <h2 className="footer__nav-title">D&eacute;couvrez KM Projets</h2>
            <ul className="footer__links">
              <li><a href="overview.html#nossolutions">Nos solutions</a></li>
              <li><a href="overview.html#noscentresservice">Nos centres de services</a></li>
              <li><a href="overview.html#nosclients">Nos clients</a></li>
              <li><a href="mailto:contact@kmprojets.com?Subject=Contact">Contactez-nous</a></li>
            </ul>
          </navv>

          <div className="footer__section footer__contact">
            <h2 className="footer__contact-title">Avez-vous des questions?</h2>
            <p>Téléphone: (+212) 520 151 710</p>
            <p>Adresse: 1, rue des plateformes, Tour Jasmin, Casablanca Finance City, 20250, Casablanca.</p>
            <p>Email: <a href="mailto:contact@kmprojets.com">contact@kmprojets.com</a></p>
          </div>
        </div>
        <div className="contact__border"></div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Copyright by KM Projets</p>
          <ul className="footer__social">
            <li><a href="https://www.twitter.com/kmprojets">Twitter</a></li>
            <li><a href="https://www.facebook.com/kmprojets">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/kmprojets">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
