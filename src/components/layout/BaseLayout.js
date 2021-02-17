
import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {

    return (
        <>

            <Link to="/">Home</Link> |
            <Link to="/count" style={{marginLeft:'5px'}}>Count</Link> |
            <Link to="/count_hooks" style={{marginLeft:'5px'}}>Count Hooks</Link> |
            <Link to="/view_count_hooks" style={{marginLeft:'5px'}}>View Count Hooks</Link>
            <Link to="/view_persons" style={{marginLeft:'5px'}}>View Persons</Link>
            <br/>
            {props.children}
        </>
    )
}

export default BaseLayout
