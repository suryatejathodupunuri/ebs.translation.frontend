import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ContactUs from "./components/contactus/Contactus";
import TryNow from "./components/trynow/TryNow";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
        
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trynow" element={<TryNow />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </>
  );
};

export default App;