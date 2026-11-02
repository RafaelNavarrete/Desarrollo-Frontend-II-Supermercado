import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import NotFound from "./pages/NotFound";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Supermercado - Gestión de Inventario</h1>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <BottomNav />
      </div>
    </Router>
  );   
}

export default App;