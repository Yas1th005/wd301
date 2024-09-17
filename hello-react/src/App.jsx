import './App.css'
import TaskCard from './TaskCard'

function App() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl mb-4">Smarter Tasks</h1>
      <p className="text-base mb-6">Project: Graduation Final Year Project (Revamp College Website)</p>
      <div className='flex justify-between'>
        <div className='rounded-lg border border-gray-300 p-4 w-[500px] bg-white shadow-lg'>
          <p className='font-bold text-lg mb-4 text-black'>Pending</p>
          <ul>
            <li><TaskCard title="Build the website with static content" dueDate="10th April" completedAtDate="None" assigneeName="Rohit S" /></li>
            <li><TaskCard title="Add a blog" dueDate="22nd March" completedAtDate="None" assigneeName="Rohit M" /></li>
            <li className="text-gray-500">+ New task</li>
          </ul>
        </div>
        <div className='rounded-lg border border-gray-300 p-4 w-[500px] bg-white shadow-lg'>
          <p className='font-bold text-lg mb-4 text-black'>Done</p>
          <ul>
            <li><TaskCard title="Design the mockup" dueDate="None" completedAtDate="10th April" assigneeName="Rohit M" /></li>
            <li><TaskCard title="Get the approval from principal" dueDate="None" completedAtDate="20th April" assigneeName="Ajay S" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
