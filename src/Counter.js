
import React, { Component } from 'react'

export class Counter extends Component {
    constructor (props) {
        console.log("contructor")
        super(props)
        this.state = {
            counter: 0
        }
        this.increment = ()=>{
            this.setState({counter: this.state.counter + 1})
        }
        this.decrement = ()=>{
            this.setState({counter: this.state.counter - 1})
        }
    }

    componentDidMount(){
        console.log("Compnent Did Mount")
        console.log("_____________________")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("component did update")
        console.log("_______________________")
    }
  render() {
      console.log('Render')
    return (
        <>
      <button onClick={this.increment}>Increment</button>  
      <button onClick={this.decrement}>Decrement</button>  
      <div>counter: {this.state.counter}</div>
    </>
    )
  }
}

export default Counter