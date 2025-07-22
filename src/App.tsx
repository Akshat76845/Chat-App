import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [message, setMessage] = useState(["hi there"])
  useEffect(()=>{
    const ws = new WebSocket("http://localhost:3000");
    ws.onmessage = (event) => {
      setMessage(m => [...m,event.data])
    }
  },[])
  return (
    <div className='h-screen bg-black'>
      <div className='h-[95vh]'>
      </div>
      <div className='w-full bg-white flex p-4'>
        <input className="flex-1 p-4">
        </input>
        <button className='bg-purple-600 text-white p-4'>Send message</button>
      </div>
    </div>
  )

}

export default App
