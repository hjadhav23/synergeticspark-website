import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Talent from "./pages/Talent";
import Training from "./pages/Training";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import useAnalyticsPageView from "./hooks/useAnalyticsPageView";
import "./App.css";

function AppRoutes() {
  // Must be rendered inside <BrowserRouter> since it uses useLocation()
  useAnalyticsPageView();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/training" element={<Training />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
