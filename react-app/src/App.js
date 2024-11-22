import './App.css';

const App=()=> {
  const name='Kousar Saeed';
  const isNameShowing=true;
  return (
    <div className="App">
<h1>Hello!... {isNameShowing?name:'irfan saeed'}</h1>
    </div>
  );
}

export default App;
