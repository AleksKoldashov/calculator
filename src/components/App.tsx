import React, { useState } from "react"
import './styles/app.css'
import { ICUlc } from "../types/types"


const App = () =>{
const [culcul, setCulcul] = useState<ICUlc>({flag:true, operand:'', resul: null, number_1: [], number_2: []})

console.log(culcul);


const DestroyResult=()=>{
  if(culcul.flag){
    setCulcul({...culcul,number_1:[]})
  }{
    if(culcul.resul){
      setCulcul({flag:true, operand:'', resul: null, number_1: [], number_2: []})
    }else{
      setCulcul({...culcul,number_2:[]})
    }
  }
}

const Num=(e:any)=>{

return culcul.flag
?
setCulcul({...culcul, number_1: [...culcul.number_1,e.target.innerHTML]})
:
setCulcul({...culcul, number_2: [...culcul.number_2,e.target.innerHTML]})
}

const FunResult=()=>{

  let num_1 = +culcul.number_1.join('')
  let num_2 = +culcul.number_2.join('')

  let res = null
  switch(culcul.operand){
    case '+': 
    res = num_1 + num_2
    break;
    case 'x': 
    res = num_1 * num_2
    break;
    case '−': 
    res = num_1 - num_2
    break; 
    case '/': 
    res = num_1 / num_2
    break;
    case '%': 
    res = (num_1*num_2) / 100
    break;    
  }
  return setCulcul({...culcul, resul:res})
}

    return<>
      <div className="container">
  <div className="calc-body">
    <div className="calc-screen">
      <div className="calc-operation">
        {culcul.number_1}
        {culcul.operand}
        {culcul.number_2}
        {culcul.resul ?` = ${culcul.resul}`: ``}
        </div>
      <div className="calc-typed">
        {culcul.flag ? culcul.number_1 : culcul.resul ? '': culcul.number_2}
        <span className="blink">_</span>
        </div>
    </div>
    <div className="calc-button-row">
      <button className="button c" onClick={()=>DestroyResult()}>C</button>
      <button className="button l" >≠</button>
      <button className="button l" onClick={(e:any)=>{[setCulcul({...culcul, flag:!culcul.flag, operand: e.target.innerHTML})]}}>%</button>
      <button className="button l" onClick={(e:any)=>{[setCulcul({...culcul, flag:!culcul.flag, operand: e.target.innerHTML})]}}>/</button>
    </div>
    <div className="calc-button-row">
      <button className="button" onClick={(e:any)=>{Num(e)}}>7</button>
      <button className="button" onClick={(e:any)=>{Num(e)}}>8</button>
      <button className="button" onClick={(e:any)=>{Num(e)}}>9</button>
      <button className="button l" onClick={(e:any)=>{[setCulcul({...culcul, flag:!culcul.flag, operand: e.target.innerHTML})]}}>x</button>
    </div>
    <div className="calc-button-row">
      <button className="button" onClick={(e:any)=>{Num(e)}}>4</button>
      <button className="button" onClick={(e:any)=>{Num(e)}}>5</button>
      <button className="button" onClick={(e:any)=>{Num(e)}}>6</button>
      <button className="button l" onClick={(e:any)=>{[setCulcul({...culcul, flag:!culcul.flag, operand: e.target.innerHTML})]}}>−</button>
    </div>
    <div className="calc-button-row">
      <button className="button" onClick={(e:any)=>{Num(e)}}>1</button>
      <button className="button" onClick={(e:any)=>{Num(e)}}>2</button>
      <button className="button" onClick={(e:any)=>{Num(e)}}>3</button>
      <button className="button l" onClick={(e:any)=>{[setCulcul({...culcul, flag:!culcul.flag, operand: e.target.innerHTML})]}}>+</button>
    </div>
    <div className="calc-button-row">
      <div className="button" onClick={(e:any)=>{Num(e)}}>.</div>
      <div className="button" onClick={(e:any)=>{Num(e)}}>0</div>
      <div className="button" onClick={()=>{}}>+/-</div>
          <div className="button l" onClick={()=>{FunResult()}}>=</div>
      </div>
    </div>
  
  </div>

    </>
}

export default App