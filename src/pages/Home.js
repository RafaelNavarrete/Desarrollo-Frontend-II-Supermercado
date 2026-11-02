import { useState } from "react";

const inventario = [
  { id: 1, producto: "Arroz grado 1 (1 kg)", codigo: "P-1001", inicial: 100, recibido: 50, enviado: 30, minimo: 40 },
  { id: 2, producto: "Fideos spaghetti (400 g)", codigo: "P-1002", inicial: 40, recibido: 0, enviado: 25, minimo: 30 },
  { id: 3, producto: "Leche entera (1 L)", codigo: "P-1003", inicial: 60, recibido: 50, enviado: 30, minimo: 50 },
  { id: 4, producto: "Yogurt natural (150 g)", codigo: "P-1004", inicial: 30, recibido: 0, enviado: 30, minimo: 25 },
  { id: 5, producto: "Pechuga de pollo (kg)", codigo: "P-1005", inicial: 25, recibido: 15, enviado: 18, minimo: 20 },
  { id: 6, producto: "Manzana fuji (kg)", codigo: "P-1006", inicial: 50, recibido: 30, enviado: 20, minimo: 30 },
  { id: 7, producto: "Detergente líquido (3 L)", codigo: "P-1007", inicial: 20, recibido: 0, enviado: 11, minimo: 15 },
];

function claseDisponible(p) {
  if (p.disponible === 0) return "agotado";
  if (p.disponible < p.minimo) return "bajo";
  return "ok";
}

function textoEstado(p) {
  if (p.disponible === 0) return "Agotado";
  if (p.disponible < p.minimo) return "Stock bajo";
  return "Disponible";
}

function Home() {
  const [busqueda, setBusqueda] = useState("");

  // disponible = inicial + recibido - enviado
  const productos = inventario.map((p) => ({
    ...p,
    disponible: p.inicial + p.recibido - p.enviado,
  }));

  const total = productos.length;
  const bajos = productos.filter((p) => p.disponible > 0 && p.disponible < p.minimo).length;
  const agotados = productos.filter((p) => p.disponible === 0).length;

  const texto = busqueda.toLowerCase();
  const filtrados = productos.filter(
    (p) =>
      p.producto.toLowerCase().includes(texto) ||
      p.codigo.toLowerCase().includes(texto)
  );

  return (
    <section>
      <h2>Panel de inventario</h2>
      <p>Revisa el stock de los productos y detecta rápidamente cuáles necesitan reposición.</p>

      <div className="resumen">
        <div className="card">
          <strong>{total}</strong>
          <span>Productos</span>
        </div>
        <div className="card warn">
          <strong>{bajos}</strong>
          <span>Stock bajo</span>
        </div>
        <div className="card danger">
          <strong>{agotados}</strong>
          <span>Agotados</span>
        </div>
      </div>

      <div className="tabla-card">
        <div className="buscar-fila">
          <label htmlFor="buscador">Buscar:</label>
          <input
            id="buscador"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="tabla-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto/Código</th>
                <th>Inventario inicial</th>
                <th>Inventario recibido</th>
                <th>Inventario enviado</th>
                <th>Inventario disponible</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.length > 0 ? (
                filtrados.map((p, i) => (
                  <tr key={p.id}>
                    <td className="centro">{i + 1}</td>
                    <td className="producto">
                      {p.producto}
                      <small>{p.codigo}</small>
                    </td>
                    <td className="num">{p.inicial}</td>
                    <td className="num">{p.recibido}</td>
                    <td className="num">{p.enviado}</td>
                    <td className={`num disponible ${claseDisponible(p)}`}>{p.disponible}</td>
                    <td className="centro">
                      <span className={`estado ${claseDisponible(p)}`}>{textoEstado(p)}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="centro">No se encontraron productos.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="tabla-pie">
          <span>
            Mostrando {filtrados.length} de un total de {total} registros
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;