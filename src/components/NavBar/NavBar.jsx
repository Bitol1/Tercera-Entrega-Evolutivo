import Button from "../Button/Button";
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    const handleCartClick = () =>{
        alert('Carrito clickeado');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Vinilos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <Link to={'/category/Nacionales'} className="nav-link">
              <Button text="Nacionales"/>
            </Link>
            <Link to={'/category/Importados'} className="nav-link">
            <Button text="Importados"/>
            </Link>
            <Link to={'/category/Accesorios'} className="nav-link">
            <Button text="Accesorios"/>
            </Link>
          </ul>
          <ul className="navbar-nav ms-auto">
            <CartWidget notificationCount={0} onClick={handleCartClick} />
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;