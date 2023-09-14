// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import { useState } from "react"
// import Counter from "./counter"
// import Employee from "./counter"

// function App(){
//   const [number,setnumber]=useState(0)

// const addcount=()=>{
//   setnumber(number+1)
// }

// let obj={
//   tittle: '1st counter',
//   number,
//   place:'hello'
// }

// let emp=[{Name: 'Bharath',Age:20},
//   {Name: 'Abhi', Age:21},
//   {Name: 'Vishnu', Age:22}
// ]


//   return(
// <div className="App">
// <button onClick={addcount}>Add</button>


// {
//   emp.map((obj ,index)=>{

//     return(

//       <Employee key={index} Name={obj.Name}  Age={obj.Age}/>
//     )
//   })
// }





// <Counter{...emp}/>
// <Counter tittle='2nd counter' number={number}/>

// </div>
//  )
// }


   
  

//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos] =useState([])
  const [toDo,setToDo] =useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i  onClick={()=>setToDos([...toDos,{ id:Date.now(),text: toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { toDos.map((obj)=>{
       
        return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
            }} Value={obj.status} type="checkbox" name="" id="" />
           
            <p>{obj.text}</p>

       
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
      })}

      {toDos.map((obj)=>{
        if(obj.status){
          return(<h1>{obj.text}</h1>)

        }
             return null
      })} 

      </div>
    </div>
  
  );
}

export default App;
