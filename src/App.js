import React, { Component } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile/Profile"
import Button from 'react-bootstrap/Button';
export default class App extends Component {
  state={
    Person :{ fullName:"Dominic Thiem",
    bio:"Dominic Thiem is an Austrian tennis player who is famous for his explosive game style and mammoth groundstrokes. Thiem is already a major force on clay despite being pretty young, and is expected to dominate the French Open once Rafael Nadal retires.", 
    imgSrc:"./ProfilePhoto.jpg", 
    profession:"Tennis Player",
    show:true
  } 

  }
  switch=()=>{
    this.setState({
      show:!this.state.show
    })
  }
 
  render() {
    return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"5rem"}}>
        <Button style={{width:"10rem",height:"3rem",fontSize:"1.5rem"}}variant="danger" onClick={this.switch}>{this.state.show?"Hide Profle":"Show Profile"}</Button>
        {this.state.show?<Profile Person={this.state.Person}/>:null}
        
        
      </div>
    )
  }
}
