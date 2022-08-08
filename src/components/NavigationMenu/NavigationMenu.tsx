import './navigation-menu.scss';

const NavigationMenu = () => {
  const navMenu = ['Home', 'Services', 'Our Project', 'About us'];

  return (
    <nav className="menu">
      <ul className="menu__list">
        {
          navMenu.map((el) => (
            <li className="menu__item" key={Math.random()}>
              <a href={`#${el}`} className="menu__link">
                {el}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavigationMenu;
