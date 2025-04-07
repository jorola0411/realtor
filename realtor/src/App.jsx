import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
// import News from './pages/News';
// import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="map" element={<Map />} />
        {/* <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} /> */}
      </Routes>
    </>
  );
}

export default App;
