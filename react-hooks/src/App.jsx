import { useContext, useEffect, useState } from 'react'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count,setCount]=useState(0)
  return (
    <>
    <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount}/>
    </CountContext.Provider>
    
    </>
  )
}
function Count({setCount}){
  return <div>
    <Renderer/>
    <Buttons setCount={setCount}/>
  </div>
}
function Renderer(){
  const count=useContext(CountContext)
  return(
    <div>
      {count}
    </div>
  )
}
function Buttons({setCount}){
  const count=useContext(CountContext)
  return(
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase</button>
      <button onClick={()=>{
      setCount(count-1)
      }}>Decrease</button>
    </div>
  )
}
export default App
