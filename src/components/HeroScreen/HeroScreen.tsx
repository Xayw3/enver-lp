import Header from '../Header/Header';
import HeroContent from '../HeroContent/HeroContent';
import './hero-screen.scss';

const HeroScreen = () => (
  <header className="hero">
    <img className="gradient" src="./hero-gradient.png" alt="" />
    <div className="container">
      <Header />
      <HeroContent />
    </div>
  </header>
);

export default HeroScreen;
