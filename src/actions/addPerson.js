

// action creators: functions that return an object

// add a person object to our global state
export const addPerson = (personObj) => {

    return {
        type: "ADD_PERSON",
        payload: personObj
    }
}


// remove an object by first name (we dont have an id but normally would use that)
export const removePerson = (firstName) => {

    return {
        type: "REMOVE_PERSON",
        payload: firstName
    }
}
