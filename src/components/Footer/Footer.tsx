import FooterLinks from '../FooterLinks/FooterLinks';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content">
        <a href="/" className="footer__logo">
          <img src="./logo.svg" alt="Enver" />
        </a>
        <FooterLinks />
        <p className="copyright">
          © 2020 Enver, All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
