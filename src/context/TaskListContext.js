import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
	const initialState = JSON.parse(localStorage.getItem('tasks')) || []

	// set tasks
	const [tasks, setTasks] = useState(initialState);

	// craete const to store null value for later
	const[editItem, setEditItem] = useState(null)

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks]);


	// add task
	const addTask = title => {
	    setTasks([...tasks, { title, id: uuid() }])
	}

	// remove task
	const removeTask = id => {
		// console.log(tasks.filter(task => task.id !== id))
		setTasks(tasks.filter(task => task.id !== id))
	}

	// clear list
	const clearList = () => {
		setTasks([])
	}

	const findItem = (id) => {
		// find item by id
		const item = tasks.find(task => task.id === id);

		// update found item using React useState - setEditItem function
		setEditItem(item)
	}

	const editTask = (title, id) => {
		const newTasks = tasks.map(task => (task.id === id ? { title, id }: task));

		setTasks(newTasks);
		setEditItem(null)
	}

	return (
		<TaskListContext.Provider 
			value={{
				tasks, 
				addTask, 
				removeTask,
				clearList,
				findItem,
				editTask, 
				editItem,
				initialState
			}}
		>
			{props.children}
		</TaskListContext.Provider>
	)
}

export default TaskListContextProvider;
	