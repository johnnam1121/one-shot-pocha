import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUsPage from './components/pages/AboutUsPage';
import GalleryPage from './components/pages/GalleryPage';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
import ReservationPage from './components/pages/ReservationPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Reservation" element={<ReservationPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
