import './HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection(props) {
    return (
        <section id="hero">
            <div className="content">
                <h1 className="main-title">Little Lemon</h1>
                <h2 className="main-subtitle">Chicago</h2>
                <p>We are a family owned restaurant focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">Reserve a Table</Link>
            </div>
            <div id="hero-image-container">
                <img src="restaurant_food.jpg" />
            </div>
        </section>
    )
}

export default HeroSection;