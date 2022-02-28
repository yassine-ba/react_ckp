import { logDOM } from '@testing-library/react'
import React, { Component } from 'react'

export default class App extends Component {
  state =
  { 
    fullName :'yassine ben aouicha'  ,
    bio : "yassine mrawa7",
     imgSrc : "logo192.png" ,
     profession : "battal ",
     showState : true ,
     cpt : 0 ,
     tasks : [
       {id:Math.random() , action : 'wake up' ,isDone:true}
     ]
  }
  
  condition = () => {
    this.setState({showState: !this.state.showState})
  }
  increment =()=> {
    this.setState({cpt : this.state.cpt +1}) }
   
   autoCount = () => {
     setInterval(() => {
       this.increment()
     }, 1000);
   }

    componentDidMount(){
    this.autoCount()
    }

  render() {

    return (
      <div>
        <h2>Counter :  {this.state.cpt }  </h2>
        <button onClick={()=>this.condition()} > show profil </button>
        {
          this.state.showState &&  
        
        <div >
          <h2> {this.state.fullName
            }
            </h2>
          <h2> {this.state.bio
            }  </h2>
          <h2> {this.state.imgSrc
            } </h2>
          <h2> {this.state.profession
            } </h2>
        </div>
  }
      </div>
    )
  }
}
