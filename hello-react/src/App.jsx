
import './App.css'
import TaskCard from './TaskCard'

function App() {

  return (
    <>
      <h1 className="font-bold text-left">Smarter Tasks</h1>
      <br></br>
      <p className="text-left">Project: Graduation Final Year Project(Revamp Collage Website)</p>
      <br></br>
      <div className='flex justify-around space-x-4'>
        <div className='p-[50px] rounded-[5px] border-2 border-solid border-[white] w-[500px] '>
          <h2 className="font-bold">Pending</h2>
          <br></br>
          <TaskCard title="Build the website with static content" date="10th April" name="Rohit S" loc="left"/>
          <TaskCard title="Add a blog" date="22nd March" name="Rohit M" loc="left"/>
          <p>+ New task</p>
        </div>
        <div className='p-[50px] rounded-[5px] border-2 border-solid border-[white] w-[500px]'>
          <h2 className="font-bold">Done</h2>
          <br></br>
          <TaskCard title="Design the mockup" date="10th April" name="Rohit M" loc="right"/>
          <TaskCard title="Get the approval from principal" date="20th April" name="Ajay S" loc="right"/>
        </div>
      </div>

    </>
  )
}

export default App
