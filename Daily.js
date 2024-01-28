import React from "react"
import DailItem from "./DailItem";

  const Daily = (props, onDelete) => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
  return (
    <div className="container my-3" style={myStyle}>
    
       <h3 className= "my-3">Daily List</h3>
        {props.daily.length===0? "No Daily List To Display":
        props.daily.map((dail)=>{
            return(<DailItem dail = {dail} key={dail.sno} onDelete={ props.onDelete}/>)
        })

        }  

    </div>
    
  )
}

 export default Daily 