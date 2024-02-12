import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Constructor from "./Pages/Constructor.jsx";
import "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <div className="w-full px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constructor" element={<Constructor />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
