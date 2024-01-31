import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Student name="rohim"></Student>
    </div>
  );
}

function Student(props){
  console.log(props);
  return(
    <div>
      <h1>Hello World!!!</h1>
    </div>
  )
}

export default App;
