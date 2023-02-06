import React, {createContext, useState} from 'react';

export const ApplicationContext = createContext();

export default function ApplicationContextProvider(props) {
    const [allEvents, setAllEvents] = useState([])
    const [sports, setSports] = useState([])
    const [teams, setAllTeams] = useState([])
    const [coordinators, setAllCoordinators] = useState([])
    const [executors, setAllExecutors] = useState([])
    const [schedule, setAllSchedule] = useState([])
    const [scores, setAllScores] = useState([])


    //combining all the values
    return (
        <ApplicationContext.Provider value={{
            allEvents, setAllEvents,
            sports, setSports,
            coordinators, setAllCoordinators,
            executors, setAllExecutors,
            teams, setAllTeams,
            schedule, setAllSchedule,
            scores, setAllScores
        }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}
