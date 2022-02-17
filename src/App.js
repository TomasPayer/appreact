import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';
import ClassCounter from './components/ClassCounter/ClassCounter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <button onClick={() => setShow(!show)}>{show ? 'Show Class Counter' : 'Show Function Counter'}</button>
      {show ? <FunctionCounter /> : <ClassCounter />}
      

    </div>
  );
}

export default App;
