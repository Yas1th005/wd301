import './TaskCard.css'
const TaskCard = (props) => {
    return (
        <>
            {props.completedAtDate=="None" ? (
                <div className='TaskItem'>
                    <h2 className="text-xl font-bold">{props.title}</h2>
                    <p className="text-sm">Completed on: {props.dueDate}</p>
                    <p className="text-sm">Assignee: {props.assigneeName}</p>
                </div>
            ) : (
                <div className='TaskItem'>
                    <h2 className="text-xl font-bold">{props.title}</h2>
                    <p className="text-sm">Completed on: {props.completedAtDate}</p>
                    <p className="text-sm">Assignee: {props.assigneeName}</p>
                </div>
            )}
        </>
    );
}

export default TaskCard;


// 

// const TaskCard = (props) => {
//   console.log(props)
//   return (
//     
//   )
// }

// export default TaskCard