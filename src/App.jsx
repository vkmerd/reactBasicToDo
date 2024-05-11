import { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (e) => {
    e.preventDefault();

    if (input === "") {
      alert("boş")
      return
    }
    const newTasks = { id: Date.now(), text: input}
    setTasks([...tasks, newTasks])
    setInput("")
  }

  useEffect(() => {
    console.log(tasks)
  },[addTask])

  const deleteTask = (taskId) => {
    const filteredTask = tasks.filter(task => task.id !== taskId )
    setTasks(filteredTask)
  }

  const editTask = (taskId) => {
    const updateText = prompt("Düzenlenecek Metni Girin")
   if(updateText === null || updateText ===``){return;}
   const state = tasks.map(task => task.id === taskId ? text: updateText)
   console.log(state);

    //  const state=  tasks.map(task=> taskId === editingTaskId ? { ...task, text: updatedText } : task)
    // console.log(state);
    // setEditingTaskId(null)

  }
  

  return (
    <>
      <form onSubmit={addTask}>
        <input type="text"  value={input} placeholder='Görev Ekleyiniz' onChange={e=> setInput(e.target.value)} />
        <button type='submit' placeholder='gönder'>Gönder</button>
      </form>
      <h3>Görevler:</h3>
      <ul>
        {tasks.map(task => <li key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(task.id)}>Sil</button>
          <button onClick={() => editTask(task.id)}>Düzenle</button>
        </li>)}
      </ul>
    </>
  )
}

export default App
