import Greet from './components/Greet'


function App() {
  const name = "Ambika"
  return (
    <div>
    <Greet myName={name}/>
    <counter/>
    </div>
  );
}

export default App;