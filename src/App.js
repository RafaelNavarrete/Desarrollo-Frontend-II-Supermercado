import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InventarioProvider } from "./context/InventarioContext";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import AgregarArticulo from "./pages/AgregarArticulo";
import ListaArticulos from "./pages/ListaArticulos";
import QuienesSomos from "./pages/QuienesSomos";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <InventarioProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 text-gray-800">
          <header className="bg-green-800 px-6 py-4 text-center text-white">
            <h1 className="text-xl font-bold">Supermercado · Gestión de Inventario</h1>
            <TopNav />
          </header>

          <main className="mx-auto max-w-4xl px-4 pt-6 pb-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agregar-articulo" element={<AgregarArticulo />} />
              <Route path="/articulos" element={<ListaArticulos />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <BottomNav />
        </div>
      </Router>
    </InventarioProvider>
  );
}

export default App;