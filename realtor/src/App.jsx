import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
import NewsDetails from './pages/NewsDetails';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="map" element={<Map />} />
        
        <Route path="news/:id" element={<NewsDetails />} /> {/* Dynamic route for NewsDetails */}
      </Routes>
    </>
  );
}

export default App;
