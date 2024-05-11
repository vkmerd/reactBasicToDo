import { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

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
        </li>)}
      </ul>
    </>
  )
}

export default App
