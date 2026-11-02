import { NavLink } from "react-router-dom";

function TopNav() {
    const linkClass = ({ isActive }) =>
        `rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
        isActive ? "bg-white text-green-800" : "bg-green-700 text-white hover:bg-green-600"
    }`;

    return (
        <nav aria-label="Menú de artículos" className="mt-3 flex justify-center gap-2">
      <NavLink to="/agregar-articulo" className={linkClass}>
        Agregar artículo
      </NavLink>
      <NavLink to="/articulos" className={linkClass}>
        Artículos
      </NavLink>
    </nav>
  );
}

export default TopNav;