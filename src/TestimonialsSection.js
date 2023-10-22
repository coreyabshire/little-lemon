import TestimonialCard from "./TestimonialCard";

function TestimonialsSection(props) {
    let testimonials = [
        {
            id: 1,
            rating: 5.0,
            name: "John Doe",
            text: "This is the best restaurant I have ever been to!",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            rating: 4.9,
            name: "Joe Schmuckatelley",
            text: "The finest that Chicago has to offer!",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            rating: 5.0,
            name: "Cindy Lou Who",
            text: "Even the Grinch would love this place!",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            rating: 4.8,
            name: "The Rock",
            text: "The Rock approves!",
            image: "https://via.placeholder.com/150"
        }

    ];

    return (
        <section id="testimonials">
            <h1 className="title">Testimonials</h1>
            <div className="content">
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <TestimonialCard 
                                rating={testimonial.rating} 
                                name={testimonial.name}
                                text={testimonial.text}
                                image={testimonial.image}
                                key={testimonial.id}
                                />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TestimonialsSection;