import { SEO } from "./components/SEO";
import Store from "./components/Store";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <SEO />
      <Router>
        <Routes>
          <Route path="/:id" element={<Store />} />
          <Route path="/" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
