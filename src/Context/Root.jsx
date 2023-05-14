import dayjs from "dayjs";
import React, { createContext, useContext, useState } from 'react';
export const root = createContext();
const Root = ({ children }) => {

    //Calendar state
    //date picker
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);

    // traveler sections state :
    const [showTraveler, setShowTraveler] = useState(false)// show and hide traveler section

    //adultsTraveler
    const [adultsTravelerExtra, setAdultsTravelerExtra] = useState(false)
    const [adultsTraveler, setAdultsTraveler] = useState(1)
    //childrenTraveler
    const [childrenTravelerExtra, setChildrenTravelerExtra] = useState(false)
    const [childrenTraveler, setChildrenTraveler] = useState(0)
    //infantsTraveler
    const [infantsTravelerExtra, setInfantsTravelerExtra] = useState(false)
    const [infantsTraveler, setInfantsTraveler] = useState(0)
    //totalTraveler
    const [totalTraveler, setTotalTraveler] = useState(1)
    const handelTotalTravel = (e) => {
        e.stopPropagation()
        setTotalTraveler(adultsTraveler + childrenTraveler + infantsTraveler)
        setShowTraveler(false)
    }

    //totalTraveler
    const [selectDepartureDate, setSelectDepartureDate] = useState(currentDate);
    const [selectReturnDate, setSelectReturnDate] = useState(false);
    const [departure, setDeparture] = useState(false)

    //child error :
    const [childError, setChildError] = useState(false)
    // class 
    const [ticketClass, setTicketClass] = useState("Economy/Premium Economy")

    //search form
    const [showSearchForm, setShowSearchForm] = useState(false)
    const [showSearchTo, setShowSearchTo] = useState(false)
    const [returnDate, setReturnDate] = useState(false)

    const value = {
        today, setToday, selectDepartureDate, setSelectDepartureDate, showSearchForm, setShowSearchForm, showSearchTo, setShowSearchTo, departure, setDeparture, returnDate, setReturnDate, selectReturnDate, setSelectReturnDate, showTraveler, setShowTraveler, totalTraveler, setTotalTraveler, handelTotalTravel, adultsTravelerExtra, setAdultsTravelerExtra, adultsTraveler, setAdultsTraveler, childrenTravelerExtra, setChildrenTravelerExtra, childrenTraveler, setChildrenTraveler, infantsTravelerExtra, setInfantsTravelerExtra, infantsTraveler, setInfantsTraveler, ticketClass, setTicketClass,
        childError, setChildError
    }
    return (
        <root.Provider value={value}>
            {children}
        </root.Provider>
    );
};

export const useRoot = () => useContext(root)

export default Root;