import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import increaseAction from '../actions/increaseAction'
import decreaseAction from '../actions/decreaseAction'

const CountHooks = () => {


  const dispatch = useDispatch(); // gives us access to dispatch function

  const count = useSelector(state => state.count);


  return (
    <>
      <h1>useSelector (state => state.count) => {count}</h1>

      <button style={{fontSize:'50px'}} onClick={()=> dispatch(increaseAction())}>+</button>
      <button style={{fontSize:'50px'}} onClick={()=> dispatch(decreaseAction())}>-</button>
    </>
  )
}

export default CountHooks
