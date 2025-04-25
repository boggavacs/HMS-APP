import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold text-blue-500">Hello, HMS!</h1>
    </div>
  )
}

export default App
