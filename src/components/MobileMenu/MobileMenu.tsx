import './mobile-menu.scss';

type MobileMenuProps = {
  handleClick: () => void,
}

const MobileMenu = ({ handleClick }: MobileMenuProps) => {
  const navMenu = [
    {
      text: 'Home',
      img: './circles.svg',
    },
    {
      text: 'Services',
      img: './zigzag.svg',
    },
    {
      text: 'Our Project',
      img: './plus.svg',
    },
    {
      text: 'About us',
      img: './triangles.svg',
    },
  ];

  return (
    <div className="mobile-menu">
      <button className="mobile-menu__close" onClick={handleClick}>
        <img src="./plus.svg" alt="close button" />
      </button>
      <img className="mobile-menu__logo" src="./logo.svg" alt="Enver" />
      <nav className="mobile-menu__navigation">
        <ul className="mobile-menu__list">
          {
            navMenu.map((el) => (
              <li className="mobile-menu__item" key={Math.random()}>
                <img className="mobile-menu__figure" src={el.img} alt="figure" />
                <a href="/" className="mobile-menu__link">{el.text}</a>
              </li>
            ))
          }
        </ul>
      </nav>
      <button className="mobile-menu__btn">
        Contact us
      </button>
    </div>
  );
};

export default MobileMenu;
