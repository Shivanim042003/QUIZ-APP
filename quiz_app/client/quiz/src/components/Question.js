import React, { useEffect, useState } from 'react';

function Question({ questions, updateResult }) {
    const [checked, setChecked] = useState(null);

    useEffect(() => {
        console.log("question")
    })

    function onSelect() {
        console.log("radio button change")
    }

    // const { id, question, options } = questions[0];

    return (
        <div className='questions'>
            <h2 className='text-light'>Question 1</h2>
            {/* <h1>{id}</h1> */}
                {questions.map((ques, i) => (
                    <>
                        <h1 key={i}>{ques.question}</h1>
                        {
                            ques.option.map((ele, i)=> (
                                <p key={i}>{ele}</p>
                            ))
                        }
                    </>
                ))}
            {/* <ul key={questions.id}>
                {questions.option.map((q, i) => (
                    <li key={i}>
                        <input
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={onSelect()}
                            
                        />
                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        <div className="check checked"></div>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default Question;



