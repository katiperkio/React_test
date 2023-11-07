const Card = ({name, age, click}) => {
    return (
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <button onClick={click}>Remove</button>
        </div>
    );
};

export default Card;