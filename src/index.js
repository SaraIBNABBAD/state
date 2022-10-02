import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// class Counter extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0,
//       somme:3,
//     };
//   }
//   render(){
//     this.setState({count:4,somme:9})
//     return(
//       <div>
//         <h1>Bonjour FS 26</h1>
//       <h2>Conteur:{this.state.count}</h2>
//       <Somme valeur={this.state.somme}/>
//       </div>
      
//     )
//   }
// }

// class Somme extends Component{
//   constructor(props){
//     super(props);
//     this.state={nom:"React JS state",};
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.nom}</h1>
//      <h2>Somme:{this.props.valeur}</h2>
//       </div>
//     )
//   }
  
// }
class Event extends Component{
  constructor(props){
   super(props);
   this.state={message:"",count:0};
   }
   render(){
    let color = "black";
    if (this.state.count<=10 && this.state.count>0){
      color="green";
    }else if(this.state.count>10){
      color="red";
    }else if(this.state.count<0){
      color="blue";
    }
    return(
      <div className='content'>
        <h1>Count: </h1> 
        <h2><span style={{color:color}}>{this.state.count}</span> </h2>
      
        <h2>{this.state.message}</h2>
        <button className='btn' onClick={()=>{
          let c =this.state.count;
          c++;
          this.setState({count:c});
        }}>Incrementer</button>

<button className='btn' onClick={()=>{
          let c =this.state.count;
          c--;
          this.setState({count:c});
         
        }}>Decrementer</button>

{/* <button onClick={()=>{
         
          this.setState({message:"Hello"});
        }}>Hello</button> */}

<button className='btn' onClick={()=>{
         this.setState({count:0});
         this.setState({message:""});
       }}>Reset</button>
      </div>
    )
   }
  }
  // this.state.count>0?{color:"red"}:{color:"blue"}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Event/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
