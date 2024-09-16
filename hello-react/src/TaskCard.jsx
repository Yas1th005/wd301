const TaskCard = (props) => {
    return (
        <>
            {props.loc === "left" ? (
                <div className='p-[5px] border-[red] border-solid border-[2px] mb-[10px] text-align-left'>
                    <p className="font-bold text-left">{props.title}</p>
                    <p className="text-left">Due on: {props.date}</p>
                    <p className="text-left">Assignee: {props.name}</p>
                </div>
            ) : (
                <div className='p-[5px] border-[blue] border-solid border-[2px] mb-[10px] text-left'>
                    <p className="font-bold">{props.title}</p>
                    <p className="text-left">Completed on: {props.date}</p>
                    <p className="text-left">Assignee: {props.name}</p>
                </div>
            )}
        </>
    );
}

export default TaskCard;
