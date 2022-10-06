import { useState } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <Home/>
     
    
    </div>
  )
}

export default App
