// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HakkimizdaPage from "./pages/HakkimizdaPage";
import TedavilerPage from "./pages/TedavilerPage";
import GaleriPage from "./pages/GaleriPage";
import IletisimPage from "./pages/IletisimPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hakkimizda" element={<HakkimizdaPage />} />
        <Route path="/tedaviler" element={<TedavilerPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
      </Routes>
    </Router>
  );
}

export default App;
