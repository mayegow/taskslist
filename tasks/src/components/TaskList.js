import React, {useState} from 'react'

export default function TaskList({ x, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false)
  const [newValue, setNewValue] = useState(x.title)

  function handleSubmit(e){
    e.preventDefault()
  }
  
  function handleText(e){
    var valueNew = e.target.value
    setNewValue(valueNew)
  }

  function handleClickUpdate(){
    onUpdate(x.id, newValue)
    setIsEdit(false)
  }

  function handleClickDelete(){
    onDelete(x.id)
  }

  function FormTasks(){
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleText} value={newValue}/>
          <button onClick={handleClickUpdate} className='btn btn-primary'>Update</button>
        </form>
      </div>
    )
  }

  function TasksElement(){
    return(
      <div >
      {x.title}
      <button onClick={()=>{ setIsEdit(true)}} className="btn btn-info">Edit</button>
      <button onClick={handleClickDelete} className="btn btn-danger">Delete</button>
      <hr></hr>
    </div>
    )
  }


  return (
  <>
  {isEdit ? <FormTasks/> : <TasksElement/>}
  </>
  )
}
