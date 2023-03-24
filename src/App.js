import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Menu" element={<MenuPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
