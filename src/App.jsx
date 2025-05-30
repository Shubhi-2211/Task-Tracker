import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
	const [showAddTask, setShowAddTask] = useState(false)

  	const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor\'s appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30 pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false
    }])
	//Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1

		const newTask = {id, ...task}
		setTasks([...tasks, newTask])
	}

	//delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//toggleAddTask
	const toggleAddTask = () => {
		setShowAddTask(!showAddTask)
	}

	//toggle task
	const toggleTask = (id) => {
		setTasks(tasks.map((task) => task.id === id ? 
		{...task, reminder: !task.reminder} : task))
	}

  	return (
    	<div className="container">
      		<Header title = 'Task Tracker' showAdd = {showAddTask} onAdd = {toggleAddTask}/>
			{showAddTask && <AddTask onAdd = {addTask}/>}
			{tasks.length > 0 ?
      		<Tasks 
				tasks = {tasks} 
				onDelete = {deleteTask} 
				onToggle = {toggleTask}
			/> : 'No Tasks To Show'
			}
    	</div>
  	);
}

export default App;