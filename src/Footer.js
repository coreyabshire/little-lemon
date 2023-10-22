import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="content">
                <div>
                    <img id="footer-image" src="restaurant.jpg" />
                </div>
                <div>
                    <h2>Doormat</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h2>Social</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;