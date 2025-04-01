
import {  Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Blog from './pages/Blog'
import Map from './pages/Map'
import './App.css'

function App() {
 
  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="Map" element={<Map />} />
    </Routes>
    </>
  )
}

export default App
