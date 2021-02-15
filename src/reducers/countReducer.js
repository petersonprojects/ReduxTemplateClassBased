
// our reducer for count actions

let initialState = {

    initializedAt: Date.now(),
    isInitialized: true,
    count : 0
}

const countReducer = (state, action) => {


    if(state === undefined)
    {
        state = initialState
    }

    switch(action.type)
    {
        case "INCREASE":
            return {
                ...state,
                isInitialized: false,
                count: state.count + 1
            }

        case "DECREASE":
            return {
                ...state,
                isInitialized: false,
                count: state.count - 1
            }
        default:
            return state;
    }

}

export default countReducer;
