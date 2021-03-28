import React from "react";
import Post from "./Post";

export default class App extends React.Component{
    state={data:null,stat:true};
    
    componentDidMount = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await response.json();
        this.setState({data:data,stat:false});
    }

    render(){
        return(
            <div>  
                {
                    this.state.stat ? <div>Loading....</div>:
                    this.state.data.map(d=><Post userId={d.userId} id={d.id} title={d.title} body={d.body}/>)
                }
            </div>
        );
    }
}