const Card = (props) => {
    return <div style={{
        padding: 18,
        border: "1px solid black",
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, .2), 0 6px 32px rgba(0, 0, 0, .19)",
    }}>
        {props.children}
    </div>
}

export default Card;