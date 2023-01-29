import React, {createContext, useState} from 'react';

export const ApplicationContext = createContext();

export default function ApplicationContextProvider(props) {
    const [allEvents, setAllEvents] = useState([])
    const [sports, setSports] = useState([])
    const [coordinators, setCoordinators] = useState([])


    //combining all the values
    return (
        <ApplicationContext.Provider value={{
            allEvents, setAllEvents,
            sports, setSports,
            coordinators, setCoordinators
        }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}
