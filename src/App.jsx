import { SEO } from "./components/SEO";
import Store from "./components/Store";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetInTouch from "./components/GetinTouch";

export default function App() {
  return (
    <div className="container">
      <SEO />
      <Router>
        <Routes>
          <Route path="/:id" element={<Store />} />
          <Route path="/" element={<Store />} />
        </Routes>
        <GetInTouch />
        <Footer />
      </Router>
    </div>
  );
}
