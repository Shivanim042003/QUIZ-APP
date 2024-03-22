import React ,{useRef}from 'react'
import { Link } from 'react-router-dom'

import '../styles/Main.css'

 function Main() {
    const inputRef = useRef(null)
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <ul>
        <li>You will be allowed to answer 10 questions one after another</li>
        <li>10 points are credited for correct answer</li>
        <li>Each questions has 3 answers</li>
        <li>You can review and change your answer before the quiz ends</li>
        <li>The result will be declared at the end of the quiz</li>

      </ul>

      <form id='form'>
        <input ref={inputRef} className='userid'type="text" placeholder='Username'  />
      </form>

      <div className='start'>
        <Link className='btn' to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  )
}

export default Main


