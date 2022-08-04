import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer";
import { Router, Routes, Route } from "react-router-dom";
import Demo from "./pages/demo";
import Solutions from "./pages/solutions";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import "./index.css";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="demo" element={<Demo />}></Route>
        <Route path="solutions" element={<Solutions />}></Route>
      </Routes>
    </div>
  );
}

export default App;
