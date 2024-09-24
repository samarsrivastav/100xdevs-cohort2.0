# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### RECOIL :
- use state--> useRecoilState (both [count,setCount])
- setState -->useSetRecoilState
- count-->useRecoilValue
- wrap the app component inside <RecoilRoot></RecoilRoot>
### Code for Recoil
```
    import { useContext, useEffect, useState } from 'react'
    import './App.css'
    import { CountContext } from './context'
    import { RecoilRoot,useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
    import { countAtom, evenSelector } from './store/atoms/count'

    function App() {
    return (
        <>
        <RecoilRoot>
        <Count/>
        </RecoilRoot>
        </>
    )
    }
    function Count(){
    return <div>
        <Renderer/>
        <Buttons />
    </div>
    }
    function Renderer(){
    const count=useRecoilValue(countAtom);
    return(
        <div>
        {count}
        <EvenRender/>
        </div>
    )
    }
    function EvenRender(){
    const isEven=useRecoilValue(evenSelector);
    return(
        <div>
        {isEven?"is Even":null}
        </div>
    )
    }
    function Buttons(){
    const setCount=useSetRecoilState(countAtom)
    console.log("re-render")
    return(
        <div>
        <button onClick={()=>{
            setCount(count=>count+1)
        }}>Increase</button>
        <button onClick={()=>{
        setCount(count=>count-1)
        }}>Decrease</button>
        </div>
    )
    }
    export default App

```