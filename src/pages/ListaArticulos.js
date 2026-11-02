import { Link } from "react-router-dom";
import { useInventario } from "../context/InventarioContext";

function ListaArticulos() {
  const { articulos } = useInventario();

  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold">Artículos del inventario</h2>
      <p className="mb-4">
        Hay <strong>{articulos.length}</strong> artículos registrados.
      </p>

      <div className="overflow-x-auto rounded-lg bg-white p-4 shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">#</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Nombre</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Marca</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {articulos.length > 0 ? (
              articulos.map((a, i) => (
                <tr key={a.id} className="odd:bg-gray-100">
                  <td className="border border-gray-300 px-3 py-2 text-center">{i + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{a.nombre}</td>
                  <td className="border border-gray-300 px-3 py-2">{a.marca}</td>
                  <td className="border border-gray-300 px-3 py-2">{a.tipo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-3 py-4 text-center">
                  No hay artículos.{" "}
                  <Link to="/agregar-articulo" className="text-green-800 underline">
                    Agrega el primero
                  </Link>
                  .
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ListaArticulos;