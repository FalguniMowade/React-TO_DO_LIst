import React from 'react'

const DailItem = ({dail, onDelete}) => {
  return (
    <>
    <div>
       <h4>{dail.title}</h4>
       <p>{dail.desc}</p>
       <button className= "btn btn-sm btn-danger" onClick={()=>{onDelete(dail)}}
       >Delete</button>
    </div>
    <hr/>
     </>
  )
}

export default DailItem