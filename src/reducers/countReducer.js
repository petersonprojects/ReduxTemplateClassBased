
// our reducer for count actions

let initialState = {

    initializedAt: Date.now(),
    isInitialized: true,
    count : 0,
    persons: []
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

        case "ADD_PERSON":
            return {
                ...state,
                persons: [...state.persons, action.payload]
            }

        case "REMOVE_PERSON":
            return {
                ...state,
                persons: state.persons.filter(person => person.firstName !== action.payload.firstName)
            }

        default:
            return state;
    }

}

export default countReducer;
