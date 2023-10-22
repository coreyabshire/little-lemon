function Nav() {
    return (
        <nav className="content">
            <img src="Logo.svg" alt="Logo" />
            <ul className="nav-menu">
                <li className="nav-item"><a href="">Home</a></li>
                <li className="nav-item"><a href="">About</a></li>
                <li className="nav-item"><a href="">Menu</a></li>
                <li className="nav-item"><a href="">Reservations</a></li>
                <li className="nav-item"><a href="">Online Order</a></li>
                <li className="nav-item"><a href="">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;