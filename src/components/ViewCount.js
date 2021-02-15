// simple component using mapStateToProps and connect function to map our redux state of count to this.props.varName
// this component accesses the count state that is set in our App.js by dispatching the buttons

import React, { Component } from 'react'
import {connect} from 'react-redux'

class ViewCount extends Component {
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
            </>
        )
    }
}

// in functional we use the hooks useReducer and useDispatch
const mapStateToProps = (state) => {

    return {
        count: state.count
    }
}


export default connect(mapStateToProps, null)(ViewCount)
