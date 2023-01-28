import React, {createContext, useState} from 'react';

export const ApplicationContext = createContext();

export default function ApplicationContextProvider(props) {
    const [allEvents, setAllEvents] = useState([])


    //combining all the values
    return (
        <ApplicationContext.Provider value={{
            allEvents, setAllEvents
        }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}
