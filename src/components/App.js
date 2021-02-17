

// react redux as a class-based component
import React, { Component } from 'react'
import {connect} from 'react-redux'
import increaseAction from '../actions/increaseAction'
import decreaseAction from '../actions/decreaseAction'

class App extends Component {

  constructor () {
    super()

    this.state = {
      count: 0,
      title: "Counter Reducer"
    }
  }

  handleCount = () => {
    
    // update both global and local state

    this.setState({
      count: this.state.count + 1
    })

    this.props.onIncreaseClick()
  }

  handleDecreaseCount = () => {

    // update both global and local state
    this.setState({
      count: this.state.count - 1
    })

    this.props.onDecreaseClick()
  }

  render() {

    return (
      <>
        <h1>{this.props.title}</h1>

        <h1>Global: {this.props.counter}</h1>
        <h1>Local: {this.state.count}</h1>

        <button onClick={this.handleCount}>Increase</button>
        <button onClick={this.handleDecreaseCount}>Decrease</button>
      </>
    )
  }
} // end of component

// higher order function is a function that takes another function (?)

// mapping global state to a property (props.id)
const mapStateToProps = (state) => {

  return {
    counter: state.count,
    title: state.title
  }

}
const mapDispatchToProps = (dispatch) => {

  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

