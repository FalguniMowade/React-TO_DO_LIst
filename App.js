 
import './App.css';
import Header from "./Header";
import Daily  from "./Daily";
import Footer from "./Footer";
import AddDail from "./AddDail";
import About from "./About";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initDail;
  if(localStorage.getItem("daily")===null){
   initDail = [];
  }
  else{
    initDail = JSON.parse(localStorage.getItem("daily"));
  }
   const onDelete = (dail)=>{
    console.log("I am ondelete of dail",dail);
    //deleting this way in react does not work
   // let index = daily.indexOf(dail);
   // daily.splice(index,1);
   setDaily(daily.filter((e)=>
   {
      return e!== dail;
   }));
   localStorage.getItem("daily");

  }
  const addDail = (title, desc)=>{
    console.log("I am adding this List ",title, desc)
    let sno;
    if(daily.length===0){
      sno = 0;
    }
    else{
     sno = daily[daily.length-1].sno+1;
    }
    const myDail={
      sno:sno,
      title:title,
      desc:desc
    }
    setDaily([...daily,myDail]);
    console.log(myDail);
    
  }
  const [daily, setDaily] = useState(initDail);
  useEffect(()=>{
    localStorage.setItem("daily",JSON.stringify(daily));
    
  }, [daily])

  return (
     <>
     <Router>
      
       <Header title="BUSINESS WORK" searchBar={false}/>
       <Switch>
       <Route exact path="/" render={()=>{
         return(
         <> 
         <AddDail addDail={addDail}/>
       <Daily daily={daily} onDelete={onDelete}/>
       </>)
       }}>
          </Route>
          <Route exact path="/about">
            <
              
            About/>
          </Route> 
        </Switch>
        
       <Footer/>
       </Router>
     </>
  );
}

export default App;