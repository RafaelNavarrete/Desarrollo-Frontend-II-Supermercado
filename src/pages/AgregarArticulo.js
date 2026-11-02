import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInventario, ACTIONS } from "../context/InventarioContext";

const tipos = ["Abarrotes", "Lácteos", "Carnes", "Frutas y verduras", "Limpieza", "Bebidas", "Otros"];
const formularioVacio = { nombre: "", marca: "", tipo: "", stock: "" };

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-200";

function AgregarArticulo() {
  const { dispatch } = useInventario();
  const navigate = useNavigate();
  const [form, setForm] = useState(formularioVacio);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre.trim() || !form.marca.trim() || !form.tipo || form.stock === "" || Number(form.stock) < 0) {
      setError("Completa todos los campos antes de guardar.");
      return;
    }

    dispatch({
      type: ACTIONS.ADD_ARTICULO,
      payload: {
        nombre: form.nombre.trim(),
        marca: form.marca.trim(),
        tipo: form.tipo,
        inicial: Number(form.stock),
      },
    });

    setForm(formularioVacio);
    setError("");
    navigate("/articulos");
  };

  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold">Agregar artículo</h2>
      <p className="mb-4">Ingresa un nuevo artículo al inventario del supermercado.</p>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow">
        <div>
          <label htmlFor="nombre" className="mb-1 block font-semibold">
            Nombre del producto
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej: Aceite de maravilla (1 L)"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="marca" className="mb-1 block font-semibold">
            Marca
          </label>
          <input
            id="marca"
            name="marca"
            type="text"
            value={form.marca}
            onChange={handleChange}
            placeholder="Ej: Chef"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1 block font-semibold">
            Tipo de producto
          </label>
          <select id="tipo" name="tipo" value={form.tipo} onChange={handleChange} className={inputClass}>
            <option value="">Selecciona un tipo...</option>
            {tipos.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
            <label htmlFor="stock" className="mb-1 block font-semibold">
                Stock inicial
            </label>
            <input
                id="stock"
                name="stock"
                type="number"
                min="0"
                value={form.stock}
                onChange={handleChange}
                placeholder="Ej: 50"
                className={inputClass}
            />
        </div>

        {error && (
          <p role="alert" className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-md bg-green-800 px-5 py-2 font-semibold text-white transition-colors hover:bg-green-700"
        >
          Guardar artículo
        </button>
      </form>
    </section>
  );
}

export default AgregarArticulo;