import React from 'react';
import ClockList from './Components/ClockList/ClockList';
import Form from './Components/Form/Form';


const App = () =>{

  const quantity = [1,2,3 ,4,5,6,7,8,9,10];

  
  return(
    <>
      <div className='clockitems'>
      <ClockList quantity={quantity}/>
    </div>
    <div>
      <h2 style={{textAlign: 'center'}}>Form's default behaviur will not work for React</h2>
      <Form/>
    </div>
    </>
  )
}

export default App;