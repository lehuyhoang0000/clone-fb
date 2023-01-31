import Card from "./Card";
function NameCard(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="name">Name: {props.name} </div>
            <div className="age">Age: {props.age} </div>
            <div className="address">Address: {props.address}</div>
            <Card> {props.children} </Card>
        </div>
    )
};

export default NameCard;