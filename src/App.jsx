import { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';
import './path-to-css.css'

function App() {
  const [puppies, setPuppies] = useState(puppylist)
  const [featPupId, setFeatPupId] = useState(null)
  function handleClick() {
    const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  }
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p
          key={puppy.id}
          onClick={() => {
            console.log("puppy id: ", puppy.id);  
            setFeatPupId(puppy.id);  
          }}
        >
          {puppy.name}
        </p>
        );
      })}

      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

