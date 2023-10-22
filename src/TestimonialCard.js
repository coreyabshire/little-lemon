function TestimonialCard(props) {
    return (
        <div className="testimonial">
            <p>Rating: {props.rating}</p>
            <div className="testimonial-inner">
                <img src={props.image} alt={props.name} />
                <h1>{props.name}</h1>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default TestimonialCard;