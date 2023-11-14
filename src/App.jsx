import { useState } from "react";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import img from "./assets/splash.png";

function Greeting({ name }) {
  if (name === "Kati") {
    return <p>Welcome {name}</p>;
  }
  return <p>Please log in</p>;
}

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Kati", age: "27" },
    { id: 2, name: "Joni", age: "29" },
    { id: 3, name: "Minttu", age: "3" },
    { id: 4, name: "Marko", age: "4" },
    { id: 5, name: "Pasi", age: "37" },
  ]);

  const [search, setSearch] = useState("");

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header logo="Kati Perkiö" />
      <main>
        <Greeting name="Kati" />
        <h2>This is my application</h2>
        <img className="image" src={img} alt="image" />
        <input type="text" placeholder="Search" onChange={searchHandler} />
        <div className="cards">
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
              <Card
                key={person.id}
                {...person}
                click={() => removeHandler(person.id)}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
