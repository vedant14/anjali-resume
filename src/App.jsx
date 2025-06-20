import { SEO } from "./components/SEO";
import { Header } from "./Header";
import Store from "./Store"; // Import the refactored Store component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <SEO />
      <Router>
        <Header />
        <Routes>
          <Route path="/:id" element={<Store />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}
