import React from "react";

export default class Post extends React.Component{
    props={userId:null,id:null,title:null,body:null};

    render(){
        return(
            <div>
                <div>userId: {this.props.userId}</div>
                <div>id: {this.props.id}</div>
                <div>title: {this.props.title}</div>
                <div>body: {this.props.body}</div>
            </div>
        );
    }
}