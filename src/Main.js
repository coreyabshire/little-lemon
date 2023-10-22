function Main() {
    return (
        <main>

            <section id="hero">
                <div className="content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned restaurant focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div>Image</div>
            </section>

            <section id="specials">
                <div className="content">
                    <div id="specials-header">
                        <h1 style={{display: "inline"}}>This weeks' specials!</h1>
                        <button>Online Menu</button>
                    </div>
                </div>
                <div className="content">
                    <div>Special 1</div>
                    <div>Special 2</div>
                    <div>Special 3</div>
                </div>
            </section>

            <section id="testimonials">
                <div className="content">
                    Testimonials
                </div>
            </section>

            <section id="about">
                <div className="content">
                    About
                </div>
            </section>

        </main>
    );
}

export default Main;