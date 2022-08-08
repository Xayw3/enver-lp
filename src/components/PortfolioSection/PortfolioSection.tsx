import PortfolioMobileSlider from '../PortfolioMobileSlider/PortfolioMobileSlider';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';
import SectionTitle from '../SectionTitle/SectionTitle';
import './portfolio-section.scss';

const PortfolioSection = () => {
  const screenSize = window.innerWidth;

  return (
    <section className="portfolio">
      <div className="container">
        <div className="figures-overlay">
          <img className="figures-circles" src="./circles.svg" alt="circles" />
          <img className="figures-zigzag" src="./zigzag.svg" alt="zigzag" />
          <SectionTitle text="Our Awesome Portofolio" />
          {
            screenSize > 768 ? (
              <PortfolioSlider />
            ) : <PortfolioMobileSlider />
          }
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
