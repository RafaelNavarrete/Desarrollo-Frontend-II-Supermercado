import { NavLink } from "react-router-dom";

function BottomNav() {
    const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

    return (
        <nav className="bottom-nav" aria-label="Navegación principal">
            <NavLink to="/" end className={linkClass}>
                Inicio
            </NavLink>
            <NavLink to="/quienes-somos" className={linkClass}>
                Quiénes Somos
            </NavLink>
            <NavLink to="/preguntas-frecuentes" className={linkClass}>
                Preguntas Frecuentes
            </NavLink>
        </nav>
    );
}

export default BottomNav;