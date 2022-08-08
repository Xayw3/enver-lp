import SectionTitle from '../SectionTitle/SectionTitle';
import './about-section.scss';

const AboutSection = () => (
  <section className="about">
    <div className="container">
      <div className="about__heading">
        <SectionTitle text="Why Enver Is The Best Choice" />
        <p className="about__desc">
          Watch this one minute video so you understand why you should use our services!
        </p>
      </div>
      <div className="video">
        <button className="video__btn">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.74 10.565L0.766135 0.0652675C0.60735 -0.0226937 0.412567 -0.0216833 0.254751 0.0679202C0.0969347 0.157524 -9.82103e-05 0.322198 7.4594e-08 0.500257V21.4997C-9.82103e-05 21.6778 0.0969347 21.8425 0.254751 21.9321C0.412567 22.0217 0.60735 22.0227 0.766135 21.9347L19.74 11.435C19.9007 11.3462 20 11.1801 20 11C20 10.8199 19.9007 10.6538 19.74 10.565Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default AboutSection;
