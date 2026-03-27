import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const taskList = [
    {
      id: 1,
      title: "Học React",
      done: false
    },
    {
      id: 2,
      title: "Làm bài tập",
      done: true
    },
    {
      id: 3,
      title: "Học JS",
      done: true
    }

  ];
  const [tasks, setTasks] = useState(taskList);
  const [title, setTitle] = useState('');

  const addTask = () => {
    if(!title.trim()) return;

    setTasks((prev) => [...prev, {id: Date.now(), title: title.trim(), done: false}]);
    setTitle('');
  }
  return (
    <div style={{maxWidth: 480, margin: '2rem auto', fontFamily: 'sans-serif'}}>
      <h1>Quản lý công việc</h1>

      {/* Form Add Task */}
      <div style={{marginBottom: '1rem'}}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Tên công việc' style={{width: '70%', padding: 8}}/>
        <button type='button' onClick={addTask} style={{marginLeft: 8, padding: '8px 12px'}}>Thêm Task</button>
      </div>

      {/* Danh sách công việc*/}
      <ul>
        {tasks.map((task) =>(
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
