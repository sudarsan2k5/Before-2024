import logo from './logo.svg';
import './App.css';

const reactDescription = ['Hello', 'Hi', "Bye"];
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}


function Header(){
  const intNum = reactDescription[genRandomInt(2)];

  return <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    {intNum} React - The Complete Guide 2023 (incl. React Router & Redux).
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
}
function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
