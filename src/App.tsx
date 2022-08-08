import './App.scss';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import HeroScreen from './components/HeroScreen/HeroScreen';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ServiceSection from './components/ServiceSection/ServiceSection';

const App = () => (
  <div className="App">
    <HeroScreen />
    <AboutSection />
    <ServiceSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </div>
);

export default App;
