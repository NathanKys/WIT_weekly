import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Content.js";

export default App = ()=>{

    const [data,setData] = useState([]);
    const [flag,setFlag] = useState(0);
  
    const getData = async ()=>{
      await axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then(res =>res.data.forEach(e=>data.push(e)));
      setData(data);
      setFlag(1);
    }
  
    useEffect(()=>{
      getData();
    })
  
    return(
      <div>
        <div style={{margin:"20px"}}>
          <input id="userId" placeholder="userId" style={{display:"block"}}></input>
          <input id="id" placeholder="id" style={{display:"block"}}></input>
          <input id="title" placeholder="title" style={{display:"block"}}></input>
          <input id="body" placeholder="body" style={{display:"block"}}></input>
          <button onClick={()=>{
            const userId = document.querySelector("#userId");
            const id=document.querySelector("#id");
            const title = document.querySelector("#title");
            const body = document.querySelector("#body");
            const objToPush = {
              userId:userId.value,
              id:id.value,
              title:title.value,
              body:body.value
          };
          setData((data)=>[objToPush,...data])
  
          userId.value = "";
          id.value = "";
          title.value = "";
          body.value = "";
          // document.querySelector("#main-wrapper").prepend(<Content userId={userId} id={id} title={title} body={body}/>)
          }} 
          style={{display:"block"}}>
            Click to Add data
          </button>
        </div>
        <div id="main-wrapper">
          {
            !flag ? "Loading...":
          data.map(d=><Content userId={d.userId} id={d.id} title={d.title} body={d.body}/>)
          }
          </div>
      </div>
    );
  };