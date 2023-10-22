function Special(props) {
    return (
        <div className="special">
            <div className="special-image">
                <img src={props.image} alt={props.title} />
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <br />
            <p><a href="Order a delivery">Order a delivery</a></p>
        </div>
    )
}

export default Special;