import './SpecialsSection.css';
import Special from "./SpecialCard";

function SpecialsSection(props) {
    let specials = [
        {
            id: 1,
            title: "Greek salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: "$12.99",
            image: "greek_salad.jpg"
        },
        {
            id: 2,
            title: "Bruchetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: "$5.99",
            image: "bruchetta.jpg"
        },
        {
            id: 3,
            title: "Lemon Dessert",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "$12.99",
            image: "lemon_dessert.jpg"
        }
    ];

    return (
        <section id="specials">
            <div className="content">
                <div id="specials-header">
                    <h1 className="title">This weeks' specials!</h1>
                    <div style={{valign: "middle"}}>
                        <button>Online Menu</button>
                    </div>
                </div>
            </div>
            <div className="content specials">
                {specials.map((special, index) => {
                    return (<Special
                        key={special.id}
                        title={special.title}
                        description={special.description}
                        price={special.price}
                        image={special.image} />)
                })}
            </div>
        </section>
    )
}

export default SpecialsSection;