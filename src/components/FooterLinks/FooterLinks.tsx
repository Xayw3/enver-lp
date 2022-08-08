import './footer-links.scss';

const FooterLinks = () => {
  const links = ['Support', 'Privacy Policy', 'Terms and Conditions'];

  return (
    <ul className="footer-links">
      {
        links.map((el) => (
          <li className="footer-links__item" key={Math.random()}>
            <a href="/" className="footer-links__link">
              {el}
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default FooterLinks;
