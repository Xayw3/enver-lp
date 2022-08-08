import SectionTitle from '../SectionTitle/SectionTitle';
import Services from '../Services/Services';
import './service-section.scss';

const ServiceSection = () => (
  <section className="services">
    <div className="container">
      <div className="services__figures-overlay">
        <img className="services__figure services__figure_triangle" src="./triangles.svg" alt="triangles" />
        <img className="services__figure services__figure_plus-top" src="./plus.svg" alt="plus" />
        <img className="services__figure services__figure_plus-bot" src="./plus.svg" alt="plus" />
        <div className="services__wrapper">
          <SectionTitle text="The Service We Provide For You" />
        </div>
        <Services />
      </div>
    </div>
  </section>
);

export default ServiceSection;
