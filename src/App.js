import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users , setUsers] = useState([]);
  // useEffect( () =>{},[]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[])
  return (
    <div>
      <h1>External Users</h1>
      <h2>{users.length}</h2>
      {
        users.map(user => Users(user))
      }
    </div>
  )
}

function Users(props){
  return(
    <div className='default_style'>
      <h1>Name : {props.name}</h1>
      <h2>Email {props.email} : </h2>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(0);
  const increaseCount = () =>{
    // const newCount = count + 1;
    setCount(count + 1);
  }
  const decreaseCount = () => setCount(count - 1);
  return(
    <div className='default_style'>
      <h1>Count : {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}



export default App;
