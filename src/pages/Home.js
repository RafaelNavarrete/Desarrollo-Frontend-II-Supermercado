import { useState } from "react";
import { useInventario } from "../context/InventarioContext";

const estilosTexto = {
  ok: "text-green-700",
  bajo: "text-orange-600",
  agotado: "text-red-700",
};

const estilosBadge = {
  ok: "bg-green-100 text-green-800",
  bajo: "bg-orange-100 text-orange-700",
  agotado: "bg-red-100 text-red-700",
};

const textosEstado = {
  ok: "Disponible",
  bajo: "Stock bajo",
  agotado: "Agotado",
};

function estadoDe(p) {
  if (p.disponible === 0) return "agotado";
  if (p.disponible < p.minimo) return "bajo";
  return "ok";
}

function Home() {
  const { articulos } = useInventario();
  const [busqueda, setBusqueda] = useState("");

  // disponible = inicial + recibido - enviado
  const productos = articulos.map((p) => ({
    ...p,
    producto: p.nombre,
    disponible: p.inicial + p.recibido - p.enviado,
  }));

  const total = productos.length;
  const bajos = productos.filter((p) => estadoDe(p) === "bajo").length;
  const agotados = productos.filter((p) => estadoDe(p) === "agotado").length;

  const texto = busqueda.toLowerCase();
  const filtrados = productos.filter(
    (p) => p.producto.toLowerCase().includes(texto) || p.codigo.toLowerCase().includes(texto)
  );

  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold">Panel de inventario</h2>
      <p>Revisa el stock de los productos y detecta rápidamente cuáles necesitan reposición.</p>

      <div className="my-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-white p-4 text-center shadow">
          <strong className="block text-3xl">{total}</strong>
          <span>Productos</span>
        </div>
        <div className="rounded-lg bg-white p-4 text-center shadow">
          <strong className="block text-3xl text-orange-600">{bajos}</strong>
          <span>Stock bajo</span>
        </div>
        <div className="rounded-lg bg-white p-4 text-center shadow">
          <strong className="block text-3xl text-red-700">{agotados}</strong>
          <span>Agotados</span>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <div className="mb-3 flex items-center justify-end gap-2">
          <label htmlFor="buscador">Buscar:</label>
          <input
            id="buscador"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-1.5 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">#</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Producto/Código</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Inventario inicial</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Inventario recibido</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Inventario enviado</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Inventario disponible</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.length > 0 ? (
                filtrados.map((p, i) => {
                  const estado = estadoDe(p);
                  return (
                    <tr key={p.id} className="odd:bg-gray-100">
                      <td className="border border-gray-300 px-3 py-2 text-center">{i + 1}</td>
                      <td className="border border-gray-300 px-3 py-2">
                        {p.producto}
                        <small className="block font-bold text-gray-500">{p.codigo}</small>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right">{p.inicial}</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">{p.recibido}</td>
                      <td className="border border-gray-300 px-3 py-2 text-right">{p.enviado}</td>
                      <td className={`border border-gray-300 px-3 py-2 text-right font-bold ${estilosTexto[estado]}`}>
                        {p.disponible}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-center">
                        <span
                          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${estilosBadge[estado]}`}
                        >
                          {textosEstado[estado]}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="border border-gray-300 px-3 py-4 text-center">
                    No se encontraron productos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-3">
          Mostrando {filtrados.length} de un total de {total} registros
        </p>
      </div>
    </section>
  );
}

export default Home;