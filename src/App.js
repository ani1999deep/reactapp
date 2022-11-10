import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
import{incNumber, decNumber} from './actions/Index';

const App = () => {

// when the button is to be disabled
const disableTheMinus=()=>{
if(myState===0){

  return true;
}

}



  const myState=useSelector((state)=>state.changeTheNumber);

  const dispatch=useDispatch();
  return (
    <>
    <div className='App'>

    <h1>Increment & Decrement  App</h1>
    <h4>Using React and Redux</h4>

    <div className='container'>

      <button className='quantity_minus' title='Decrement' disabled={disableTheMinus()} 
      
      onClick={()=>dispatch(decNumber(6))}><span>-</span></button>
      <input name='quantity '  type='text' className='quantity_input' value={myState}/>
      <button className='quantity_plus' title='Increment'
      onClick={()=>dispatch(incNumber(5))}><span>+</span></button>
    </div>
    </div>
    </>
  )
}

export default App