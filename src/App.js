import {useState,useRef} from 'react';
import './App.css'
  


function App() {
  const InputRef=useRef(null);
  const ResultRef=useRef(null);

  const [result,setResult]=useState(0);

  const plus=(e)=>{
    e.preventDefault();
    setResult((result)=> result+Number(InputRef.current.value))

  }
  const minus=(e)=>{
    e.preventDefault();
    setResult((result)=> result - Number(InputRef.current.value))

  }
  const multiply=(e)=>{
    e.preventDefault();
    setResult((result)=> result  * Number(InputRef.current.value))

  }
  const divide=(e)=>{
    e.preventDefault();
    setResult((result)=> result/Number(InputRef.current.value))

  }
  const resetResult=(e)=>{
    e.preventDefault();
    setResult((preVal)=> preVal*0)

  }
  const resetInput=(e)=>{
    e.preventDefault();
    InputRef.current.value=0;

  }




  return (
    <div className="App">
    <div className="header-nul">
    <h1 className='header-h1'>Simplest calculator</h1>
    </div>
    <div className="result-div">
    <p className="result-para" ref={ResultRef}>{result}</p>
    </div>

    <div className="input-div">
    <input ref={InputRef} pattern='[0-9]' type='number'></input>
    
    </div>
    <nav className="operator-nav">

    <button onClick={plus} className='operator-button'>add!</button>
    <button onClick={minus} className='operator-button'>sub!</button>
    <button onClick={multiply} className='operator-button'>mul!</button>
    <button onClick={divide} className='operator-button'>div!</button>
    <button onClick={resetInput} className='operator-button, reset-opps'>reset input!</button>
    <button onClick={resetResult} className='operator-button, reset-opps'>reset result!</button>


    
    </nav>


    </div>
  );
}

export default App;
