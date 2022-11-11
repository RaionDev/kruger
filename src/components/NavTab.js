import { Link } from "react-router-dom"

const NavTab = () => {
    return (
        <div className="div-nav">
            <Link to="/">
                <p className="text-nav">
                    Home
                </p>
            </Link>
            <Link to="/Administrador">
                <p className="text-nav">
                    Admin
                </p>
            </Link>
            <Link to="/Empleado">
                <p className="text-nav">
                    Employee
                </p>
            </Link>
        </div>
    )
}

export default NavTab