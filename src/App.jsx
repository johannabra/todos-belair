import LandingPage from "./Pages/LandingPage";
import Todos from "./Pages/Todos";
import Info from "./Pages/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
