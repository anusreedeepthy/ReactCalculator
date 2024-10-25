import { useState } from 'react'
import './App.css'

function App() {
  const[result,setResult]= useState("")

  const handleClick =(e)=>{
    setResult(result.concat(e.target.name))
  }
  const clear=()=>{
    setResult("")
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length-1))
  }
  const calculate=()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult("Error")
    }

    
  }
  return (
  <>
      <div className="container">
        <input value={result} className="screen"  type="text" placeholder="0" readonly />
    <div className="bottom">
    <button name='(' onClick={handleClick} className="op">(</button>
    <button name=')' onClick={handleClick} className="op">)</button>
    <button id="clear" onClick={clear} className="op">Clear</button>
    <button name='/' onClick={handleClick} className="operator">/</button>
    <button name='7' onClick={handleClick} className="numbers">7</button>
    <button name='8' onClick={handleClick} className="numbers" >8</button>
    <button name='9' onClick={handleClick} className="numbers">9</button>
    <button name='*' onClick={handleClick} className="operator">*</button>
    <button name='4' onClick={handleClick} className="numbers">4</button>
    <button name='5' onClick={handleClick} className="numbers">5</button>
    <button name='6' onClick={handleClick} className="numbers">6</button>
    <button name='-' onClick={handleClick} className="operator">-</button>
    <button name='1' onClick={handleClick} className="numbers">1</button>
    <button name='2' onClick={handleClick} className="numbers">2</button>
    <button name='3' onClick={handleClick} className="numbers">3</button>
    <button name='+' onClick={handleClick} className="operator">+</button>
    <button name='0' onClick={handleClick} className="numbers">0</button>
    <button name='.' onClick={handleClick} className="numbers">.</button>
    <button id="backspace" onClick={backspace} className="op">AC</button>
    <button id="equal" onClick={calculate} className="equal">=</button>

</div>
    </div>
  </>
  )
}

export default App