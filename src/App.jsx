// import React from "react";
// import "./App.css";
// import SearchFilter from "./components/SearchFilter/SearchFilter.jsx";
// import Counter from "./components/Counter/Counter.jsx";
// function App(){
//   return(
//     <div>
//     {/* <Counter/> */}
//     {/*<SearchFilter/>*/}
//     </div>
//   );
// }
// export default App;

import { useState } from 'react';
import './App.css';

import ButtonOne from './components/Button/ButtonOne';
import ButtonSce from './components/Button/ButtonSec';

function App() {

  const [count, setCount] = useState(0);


  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='main'>
      <h1>Count: {count}</h1>
      <ButtonOne onClick={incrementCount} />
      <ButtonSce onClick={incrementCount} />
    </div>
  );
}

export default App;