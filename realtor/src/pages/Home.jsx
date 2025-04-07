import Header from '../components/Header.jsx'; 
import HeroSection from '../components/Homie/Hero.jsx';
import Discovery from '../components/Homie/Discovery.jsx';
import Cards from '../components/Homie/Cards.jsx';
import Footer from '../components/Footer.jsx';


export default function Home() {
    return (
      <>
      <Header />
      
          <HeroSection />
          <Discovery />
          <Cards />
        <Footer />
      </>
    );
  }
  