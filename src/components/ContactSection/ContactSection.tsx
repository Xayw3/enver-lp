import SectionTitle from '../SectionTitle/SectionTitle';
import './contact-section.scss';

const ContactSection = () => (
  <section className="contacts">
    <div className="container">
      <div className="contacts__wrapper">
        <SectionTitle text="Contact us for the service you want to use" />
        <button className="contacts__btn">
          Contact us
        </button>
      </div>
    </div>
  </section>
);

export default ContactSection;
