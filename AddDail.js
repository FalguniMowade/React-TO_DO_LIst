import React, { useState } from 'react'


 
const AddDail = ({addDail}) => {
   const [title, setTitle]= useState("");
   const [desc, setDesc]= useState("");
    const submit= (e)=>{
       e.preventDefault();
       if(!title || !desc){
        alert("Title OR Descripsion cannot be blank")
       }
       else{
         addDail(title,desc);
          setTitle("");
          setDesc("");
    }
}
    return (
        <div className="container my-3">
        <h3>Add List</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Daily List Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                    className="form-control" id=" title" />
                    </div>     
                <div className="mb-3">
                    <label for="desc" className="form-label">Daily List Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
                   className="form-control" id=" desc"/>
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddDail
