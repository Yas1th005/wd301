import React from 'react';

import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="position absolute top-[20vh] left-[20vw]">
      <h1>Smarter Tasks</h1>
      <p>Project: Graduatin Final Year Project (Revamp College Website)</p>
      <div  className="flex space-around gap-[10px]">
        <div className="border white p-[10px]">
          <h1>Pending</h1>
          <TaskCard title="Build the website with static content" completedAtDate="None" dueDate="10th April" assigneeName="Rohit S"/>
          <TaskCard title="Build the website with static content" completedAtDate="None" dueDate="22nd March" assigneeName="Rohit M"/>
          <p>+New Task</p>
        </div>
        <div className="border white p-[10px]">
          <h1>Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"/>
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
        </div>
      </div>
    </div>
  )
}

export default App;