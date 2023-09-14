// import React from 'react'

// function counter({tittle,...emp}) {

 
//   return (
//     <div>
//       <h1>{tittle} {emp.number}</h1>
//     </div>
//   )
// }

// export default counter
 
import React from 'react'

function Employee(props) {
  return (

    <div>
      <h2>Name={props.Name} Age={props.Age}</h2>        
    </div>

  )
}

export default Employee
