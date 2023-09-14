import React, { useState } from 'react'

function Sample() {


 const [array,setarray] = useState([])
 const [ inp,setInp]=useState('')

 function asd(e){
    console.log( e.target.value);
    setInp(e.target.value)
  

 }

 function insert(e){
    setarray([...array,inp])
    console.log(array)
 }


  return (
    <div>

        <input type="text" onChange={asd} />
        <button onClick={insert}>ADD TO ARRAY</button>

        {
            array.map((value)=>(
                <h1>name = {value}</h1>
            ))
        }
    </div>
  )
}

export default Sample
