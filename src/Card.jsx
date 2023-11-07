const Card = ({name, title, age}) => {
    return (
        <div class="cards">
            <h2>Name: {name}</h2>
            <p>Title: {title}</p>
            <p>Age: {age}</p>
        </div>
    )
};

export default Card;