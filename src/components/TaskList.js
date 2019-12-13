import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

// build full task list
const TaskList = () => {
	// get tasks from '../context/TaskListContext'
	const { tasks } = useContext(TaskListContext);
	return (
		<div> 
			{/* if there are tasks in the task array make the list*/}
			{tasks.length ? (
				<ul className="list">
					{tasks.map(task => {
						return <Task task={task} key={task.id}/>;
					})}
				</ul>
			) : (
				// if there is no tasks in the task array, display no tasks 
				<div className="no-tasks">No Tasks</div>
			)}
		</div>
	);
};

export default TaskList;

