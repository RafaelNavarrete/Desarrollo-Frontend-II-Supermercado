import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section>
            <h2>404 - Página no encontrada</h2>
            <p>La ruta que buscas no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </section>
    );
}

export default NotFound;