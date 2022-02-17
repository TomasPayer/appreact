import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';
import ClassCounter from './components/ClassCounter/ClassCounter';


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <NavBar />
      <button onClick={() => setShow(!show)}>Show Button</button>
      {show ? <FunctionCounter /> : null}
      <ClassCounter /> 

    </div>
  );
}

export default App;
