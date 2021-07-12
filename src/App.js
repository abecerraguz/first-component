import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const cards = [
    {
      firstName: "Doe",
      lastName: 'Jane',
      age:45,
      hairColor:'Black'
    },
    {
      firstName: "Smith",
      lastName: 'Jhone',
      age:88,
      hairColor:'Brown'
    },
    {
      firstName: "Fillmore",
      lastName: 'Millard',
      age:50,
      hairColor:'Brown'
    },
    {
      firstName: "Smith",
      lastName: 'María',
      age:62,
      hairColor:'Green'
    }
  ]
  return (
    <div className="container">
      {/* <div className="cards"> */}
          {
            cards.map(card => (
              <PersonCard
              firstName={card.firstName}
              lastName={card.lastName}
              age={card.age}
              hairColor={card.hairColor}
              >
              </PersonCard>
            ))
          }
        </div>
    // </div> 
  );
}

export default App;
