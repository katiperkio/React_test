import { useState } from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'


function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Kati', title: 'CEO', age: '27' },
    { id: 2, name: 'Joni', title: 'CEO', age: '29' },
    { id: 3, name: 'Pasi', title: 'intern', age: '37'}
  ]);
  return (
    <>
      <Header logo="Kati Perkiö" />
      <main>
        <h2>This is my application</h2>
        <div className="cards">
          {persons.map((person) => (<Card key={person.id} {...person}/>
          ))}
{/*   <Card name={persons[0].name} title={persons[0].title} age={persons[0].age} />
      <Card name={persons[1].name} title={persons[1].title} age={persons[1].age}/>
      <Card name={persons[2].name} title={persons[2].title} age={persons[2].age}/> */}
      </div>
      </main>
      <Footer />
      </>
  )
};

export default App
