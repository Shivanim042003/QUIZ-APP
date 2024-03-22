import React, { useEffect } from 'react'
import Question from './Question'
import data from '../database/data'

/*redux store import */Question
import {useSelector} from react-redux
function Quiz() {
  
   const State = useSelector(state => state)
   useEffect(()=>{
      
   })
  function onNext(){
     
  }

  function onPrev(){

  }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <div className='grid'>
          <Question questions={data}/>
          
        </div>
        <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}> Next</button>
        
        </div>
    </div>
  )
}

export default Quiz
