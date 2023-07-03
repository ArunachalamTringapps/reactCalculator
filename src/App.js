import './App.css';
import { IoArrowBack } from "react-icons/io5";
import ReactSwitch from "react-switch"
import { useState } from 'react';

function App() {
  const [theme,setTheme]=useState("light");
  const [ans,setAns]=useState('');
  const result=(val)=>{
    setAns(prevval=>prevval+val);
  }
  const clearAll=()=>{
    setAns("");
  }
 
const handleChange=(e)=>{
  const regex = /^[0-9\b]+$/;
  console.log(e.keyCode);
  if(e.keyCode===8){
    reduceOne();
  }
  if(e.keyCode===13){
  evalFun();
  }
  if(e.keyCode===187 || e.keyCode===189 || e.keyCode===56 || e.keyCode===191 || e.keyCode===190){
     if(e.key==='>'||e.key==='?'|| e.key==='_'|| e.key==='=' ){
      return null;
    }
    else{
      setAns(prevval=>prevval+e.key)
    }
  }
  else if (regex.test(e.key)) {
    setAns(prevval=>prevval+e.key)
  }
}

const reduceOne=()=>{
  let tempAnsState=String(ans);
  let newAnsState=tempAnsState.substring(0,tempAnsState.length-1);
  setAns(newAnsState)
}

const evalFun=()=>{
  try{
  // const equalEvaAns=eval(ans);
  // eslint-disable-next-line no-eval
  const equalEvaAns=String(eval(ans));
  setAns(equalEvaAns)
  }
  catch{
    // alert("INVALID EXPRESSION");
    setAns("undefined");
  }
}


const toggleFun=()=>{
  setTheme((curr)=>(curr==="light"?"dark":"light"))
}




 
  return (
    <div id={theme} className="App">
      <div className='calculatorCenter'>
        <div className='answerTab'>
          <div className='theme'>
            <ReactSwitch onChange={toggleFun} checked={theme==="dark"}></ReactSwitch>
            <span className='DarkLightName'>
            {theme==="dark"?"Dark Mode":"Light Mode"}
            </span>
          </div>
          <input type='text' pattern='[0-9]' onKeyDown={handleChange} value={ans} style={{height:"1.5em"}}/>
        </div>
        <div className='typingFiled'>
          <div className='backArrow typeContent' onClick={()=>{reduceOne()}}><IoArrowBack></IoArrowBack></div>
          <div className='clearAll typeContent' onClick={()=>{clearAll()}}>c</div>
          <div className='divide typeContent' onClick={()=>{result("/")}}>/</div>
          <div className='multiple typeContent' onClick={()=>{result("*")}}>*</div>
          <div className='seven typeContent' onClick={()=>{result(7)}}>7</div>
          <div className='eight typeContent' onClick={()=>{result(8)}}>8</div>
          <div className='nine typeContent'  onClick={()=>{result(9)}}>9</div>
          <div className='sub typeContent' onClick={()=>{result("-")}}>-</div>
          <div className='four typeContent' onClick={()=>{result(4)}}>4</div>
          <div className='five typeContent' onClick={()=>{result(5)}}>5</div>
          <div className='six typeContent' onClick={()=>{result(6)}}>6</div>
          <div className='add typeContent' onClick={()=>{result("+")}}>+</div>
          <div className='one typeContent' onClick={()=>{result(1)}}>1</div>
          <div className='two typeContent' onClick={()=>{result(2)}}>2</div>
          <div className='three typeContent' onClick={()=>{result(3)}}>3</div>
          <div className='equal typeContent' onClick={()=>{evalFun()}}>=</div>
          <div className='zero typeContent' onClick={()=>{result(0)}}>0</div>
          <div className='dot typeContent' onClick={()=>{result(".")}}>.</div>
        </div>
      </div>
    
      

    </div>
  );
}

export default App;
