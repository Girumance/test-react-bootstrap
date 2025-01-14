import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
