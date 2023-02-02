import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Homepage";
import Artcard from "./components/Artcard";
import Gallery from "./pages/Gallery";
import Artdetail from "./pages/Artdetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artcard" element={<Artcard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/artcard/:id" element={<Artdetail />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
