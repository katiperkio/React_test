import { useState } from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Kati', title: 'CEO', age: '27' },
    { id: 2, name: 'Joni', title: 'CEO', age: '29' },
    { id: 3, name: 'Pasi', title: 'intern', age: '37'}
  ]);

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  return (
    <>
      <Header logo="Kati Perkiö" />
      <main>
        <h2>This is my application</h2>
        <div className="cards">
          {persons.map((person) => (<Card key={person.id} {...person} click={removeHandler}/>
          ))}
      </div>
      </main>
      <Footer />
    </>
  )
};

export default App
