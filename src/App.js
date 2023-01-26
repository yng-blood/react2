import './App.css';
import React, { Component } from 'react'
export default class App extends Component {
  state={
    Person:" ",
    Game:" ",
    Rank:" ",
    deta:[]
    
  }
  changers=(eve)=>{

    this.setState({[eve.target.name]:eve.target.value});
    console.log(this.state)
  }
  btnaction=(act)=>{
    act.preventDefault()
const playersdata ={
  Person:this.state.Person,
  Game:this.state.Game,
  Rank:this.state.Rank
}
const arr=this.state.deta;
arr.push(playersdata)
this.setState({deta:arr})
  }
  render() {
    return (
      <div id='body'>
<h1 id='H1'> Welcome to sports Feed back form 2k23</h1>
       
       <form>
       <div id='BLOGBOX'>
        
         <label htmlFor='name'>Name :</label>
         <input type={"text"} placeholder='Name' name='Person' value={this.state.Person}  onChange={this.changers}></input>
         <br />
         <label htmlFor='Game'>Sports :</label>
         <input type={"text"} placeholder='sports' name='Game' value={this.state.Game}  onChange={this.changers}></input>
         <br />
         <label htmlFor='Rank'>Rank :</label>
         <input type={"number"} placeholder='rating' name='Rank' value={this.state.Rank} onChange={this.changers}></input>
          <br/>
          <button onClick={this.btnaction}>submit</button>
          </div>
          </form>
         
         <div id='continer'>
        {  this.state.deta.map((value,index)=>{
          return(
            <div className='backlog' key={index}>Name : { value.Person}| Game: {value.Game}| Rank: {value.Rank}</div> 
          )
        })}
         </div>
      </div>
    )
  }
};
