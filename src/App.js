import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Menu' element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
