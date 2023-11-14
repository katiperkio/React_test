const Card = ({ name, age, click }) => {
  return (
    <div
      style={age < 30 ? { background: "white" } : { background: "lightgray" }}
      className="card"
    >
      <h3>Name: {name}</h3>
      <p className={age < 30 ? "green-age" : "orange-age"}>Age: {age}</p>
      <button onClick={click}>Close</button>
    </div>
  );
};

export default Card;
