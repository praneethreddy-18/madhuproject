import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
