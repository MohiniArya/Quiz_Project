import React, { useState } from 'react'
import {data} from './data'
import './Quiz.css'

export default function Quiz() {

    const [index,setIndex] = useState(0);
    const [quizEnded,setEndQuiz] = useState(false);
    const [score,setScore] = useState(0);
    const [selectedoption,setSelectedOption] = useState();
    



    // const handlenext = (e) => {
    //     if (index+1 < data.length)
    //     { setIndex(index+1);
    //       setSelectedOption('');
           
    //     }
    //     else {
    //        setQuiz(true)
    //     }

    // }

   const handleSelectedOption =(selectedoption)=>{
      //  const selectedoption = e.target.value
        console.log(selectedoption)
        if (selectedoption===data[index].correctAnswer)
        {
            setScore(score+1);
        }
        if (index+1 < data.length)
        { setIndex(index+1);
          setSelectedOption('');
           
        }
        else {
          setEndQuiz(true)
        }
        
    }

  return (

    <div className='whole-div'>
      <div>
         <h1 className='h1-quiz'> Quiz App </h1>
        
       
       {  quizEnded ? (<div className='end'><h1> Quiz Ended </h1> <h1 className='h1-quiz'>{score}</h1></div> ) 
        :
         (<div className='container'>
       <h2 className='h2-quiz'> Questions {index+1} of {data.length} </h2>
         <h2 className='h2-quiz'> {data[index].question} </h2>
         <div className='ans-box'>
      <ul> 
        {data[index].options.map((options,idx)=> 
        {
          return (<li onClick={(e)=>handleSelectedOption(options)} className='list'> {options}</li>)
        }) 
        }
        </ul>
       
       </div>
         {/* <button onClick={handleSelectedOption}> Next </button>  */}
         </div> ) } 

       </div>
        <div>
          
          </div>
       
    </div>
  )
}

