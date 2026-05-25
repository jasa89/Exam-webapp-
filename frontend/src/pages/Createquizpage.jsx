import React from 'react'
import Topnav from '../components/topnav/Topnav'
import './Examdesignpage.css'
export default function Createquizpage() {
  return (
   
   <>
    
    <Topnav/>
    <div className='examdesign-page'> 
    
    <h1> Create Quiz</h1>
    
    <div className='design-container'>

   <div className="task-section">

<div className="form-group">

<label>Quiz name:</label>
<input type="text" placeholder='Give name for exam' />
</div>

<div className="form-group">

<label>Quiz opens:</label>
<input type="datetime-local" id='quiz-open'name="available-from" />
</div>

<div className='form-group'>
<label>Quiz closes:</label>
<input type="datetime-local" id='quiz-close'name="available-until" />    
<label>Quiz time limit:</label>


<select name="timelimits" id="time-limit-select">
  <option value="">Select time limit for quiz</option>
  <option value="60">60min</option>
  <option value="90">90min</option>
  <option value="120">120min</option>
  
</select>

</div>

<h3>Create tasks:</h3>

<select name="tasks" id="task-select">
  <option value="">Select tasks for Quiz from Task database</option>
  <option value="Task1">Task 1</option>
  <option value="Task2">Task 2</option>
  <option value="Task3">Task 3</option>
  
</select>

</div>

<button>Add task</button>

<div className='ai-generator'>

<h3>Generate quiz tasks with AI</h3>

<textarea  id="ai-assistant" name="assistant" placeholder='Example: Create 5 React questions for beginners' >

</textarea>

</div>
 <button>Generate with AI</button>

<div className='save-exam'>

<button>Save and Quit</button>

<button>Publish Quiz</button>

</div>


</div>

  </div> 

</>
    
  )
}