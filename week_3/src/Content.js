import React from "react";

export default Content = ({userId,id,title,body})=>{
return(
      <div style={{border:"2px solid black",marginBottom:"13px",padding:"7px"}}>
        <div>User ID: {userId}</div>
        <div>ID: {id}</div>
        <div>Title: {title}</div>
        <div>Body: {body}</div>
      </div>
);
}