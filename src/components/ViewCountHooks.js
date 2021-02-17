
import React from 'react'
import {useSelector} from 'react-redux'

const ViewCountHooks = () => {

  const count = useSelector(state => state.count);

  return (
    <>
      <h1>View Count w/ Hooks</h1>
      <h1>{count}</h1>
    </>
  )
}

export default ViewCountHooks
