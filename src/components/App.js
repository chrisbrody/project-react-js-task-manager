import React from 'react'; 
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header'
import TaskListContextProvider from '../context/TaskListContext';

import '../App.css'


// content display using '../context/TaskListContext'
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
      	<div className="app-wrapper">
      		<div className="main">
            {/* from header.js*/}
            <Header />
            {/* from TaskForm.js*/}
            <TaskForm />
            {/* from TaskList.js*/}
      			<TaskList />
      		</div>
      	</div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
