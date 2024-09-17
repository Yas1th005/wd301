const TaskCard = (props) => {
    return (
        <>
            {props.completedAtDate === "None" ? (
                <div className='p-4 border border-black rounded-lg mb-4 text-left'>
                    <p className="font-bold text-lg text-black">{props.title}</p>
                    <p className="text-sm text-black">Due on: {props.dueDate}</p>
                    <p className="text-sm text-black">Assignee: {props.assigneeName}</p>
                </div>
            ) : (
                <div className='p-4 border border-black rounded-lg mb-4 text-left'>
                    <p className="font-bold text-lg text-black">{props.title}</p>
                    <p className="text-sm text-black">Completed on: {props.completedAtDate}</p>
                    <p className="text-sm text-black">Assignee: {props.assigneeName}</p>
                </div>
            )}
        </>
    );
}

export default TaskCard;
