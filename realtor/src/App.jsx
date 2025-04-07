import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
