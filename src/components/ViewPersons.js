

import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addPerson, removePerson} from '../actions/addPerson'

const ViewPersons = () => {

    const persons = useSelector(state => state.persons);
    const dispatch = useDispatch();

    const [id, setID] = useState(0)

    let personObj = {
        name: "Micah",
        age: 26,
        id: id
    }

    let jsx = persons.map(person => {
        return <div key={person.id}><h1>{person.age}</h1>
        <h1>{person.name}</h1> <h1>ID: {person.id}</h1></div>
    })

    return (
        
        <>
            <button onClick={()=> { dispatch(addPerson(personObj)); setID(id + 1);}}>Add Person</button>
            
            <h1>View Persons</h1>

            {jsx}
        </>
    )
}

export default ViewPersons