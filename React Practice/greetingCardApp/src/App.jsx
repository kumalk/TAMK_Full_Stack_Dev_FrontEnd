import { useState } from 'react';

function BulbObject({ person,Gender}) {
  const [name, setName] = useState(person);
  const [isMale, setSex] = useState(Gender);
  const Sex= isMale ? "Mr.":"Ms.";
  const [greeting, setGreeting] = useState("Click On the Button to see your greeting");

  const changeGreeting =()=>{
    setGreeting('Hello '+name+' Welcome to the Greeting Card App. Enjoy creating your cards!');
  }

 


  return (
    <div>
      <h1>Hello, {Sex}{name}!</h1>
      <h2>Welcome to the Greeting Card App</h2>
      <button onClick={changeGreeting}>Click Me!</button>
      <h3>
        {greeting}
      </h3>
    </div>
  );
}

export default function App() {
  return (
    <div className='greeting-cards-container'>
      <BulbObject person="Ranroo" Gender={true} />
      <BulbObject person="Raji" Gender={false}/>
    </div>
  );
}
