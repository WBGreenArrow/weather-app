import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import api from "./services/api/config"
import './App.css'

function App() {
  const [count, setCount] = useState(0) as any

  const params = { q:"Marabá"}

  useEffect(() =>{
    api.get("",{ params })
    .then((response) => setCount(response.data.name))
    .catch((err) => console.log(err));
  },[])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count : any) => count + 1)}>
          count is {count}
        </button>
        <p className='font-sans hover:font-serif'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
