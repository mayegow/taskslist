import React, { useState } from 'react'
import TaskList from './TaskList'

export default function TodoApp() {

    const [title, setTitle] = useState('')
    const [tasks, setTasks] = useState([])

    function handleUpdate(id, value){
        const temp = [...tasks]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTasks(temp)
    }
    function handleDelete(id){
        const temp = tasks.filter(item=> item.id !== id)
        setTasks(temp)
        
        
    }
    function handleChange(e){
        const value = e.target.value
        setTitle(value)
    }
    function handleSubmit(e){
        e.preventDefault()
        const newTasks = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        const temp = [...tasks]
        temp.unshift(newTasks)
        setTasks(temp)
        // setTasks([...tasks, newTasks])
    }

  return (
    <div className="todo-container">
        <form className="todo-form" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todo-input" value={title}/>
            <input onClick={handleSubmit} className="todo-btn" type="submit" value="Crear"/>
            
        </form>
        <div className="todo-list">
        {tasks.map(x => (
            <TaskList key={x.id} x={x} onUpdate={handleUpdate} onDelete={handleDelete} />
            )
        )}
        </div>
    </div>
  )
}
