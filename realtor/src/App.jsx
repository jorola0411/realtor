import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
import NewsDetails from './pages/NewsDetails';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
       <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="map" element={<Map />} />
        <Route path="news/:id" element={<NewsDetails />} /> {/* Dynamic route for NewsDetails */}
      </Routes>
         <Footer />
    </>
  );
}

export default App;
