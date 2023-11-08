const Card = ({ name, age, click }) => {
  return (
    <div
      style={age < 30 ? { background: "white" } : { background: "gray" }}
      className="card"
    >
      <h3>Name: {name}</h3>
      <p className={age < 30 ? "green-age" : "white-age"}>Age: {age}</p>
      <button onClick={click}>Close</button>
    </div>
  );
};

export default Card;
