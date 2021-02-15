
import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {

    return (
        <>

            <Link to="/">Home</Link>
            <Link to="/count" style={{marginLeft:'5px'}}>Count</Link>
            <br/>
            {props.children}
        </>
    )
}

export default BaseLayout
