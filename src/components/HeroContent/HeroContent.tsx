import './hero-content.scss';

const HeroContent = () => (
  <div className="offer">
    <div className="offer__content">
      <h1 className="offer__title">
        Build Your Awesome Platform
      </h1>
      <p className="offer__text">
        Enver studio is a digital studio that offers several services such as UI/UX Design to developers,
        we will provide the best service for those of you who use our services.
      </p>
      <button className="offer__btn">
        Our Services
        <img src="./arrow-right-up.svg" alt="arrow up right" />
      </button>
    </div>
    <div className="offer__image">
      <img className="hero-image" src="./offer-img.png" alt="Happy customer" />
      <div className="figures">
        <img className="figure figure_zigzag" src="./zigzag.svg" alt="zig zag" />
        <img className="figure figure_triangles" src="./triangles.svg" alt="triangles" />
        <img className="figure figure_circles" src="./circles.svg" alt="circles" />
        <img className="figure figure_plus" src="./plus.svg" alt="plus" />
      </div>
    </div>
  </div>
);

export default HeroContent;
