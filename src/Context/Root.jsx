import dayjs from "dayjs";
import React, { createContext, useContext, useState } from 'react';
export const root = createContext();
const Root = ({ children }) => {

    // form start
    const [locationForm, setLocationForm] = useState({
        "countryName": "France",
        "airportLocation": "Paris",
        "sortForm": "FRA"
    })
    const [locationTo, setLocationTo] = useState({
        "countryName": "Canada",
        "airportLocation": "Toronto",
        "sortForm": "CAN"
    })


    // categories
    const [active, setActive] = useState("one way")
    const [showWithCategories, setShowWithCategories] = useState(false)

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
    // return data must be after departure Date
    const [selectReturnDate, setSelectReturnDate] = useState(currentDate.add(1, 'day'));

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
        childError, setChildError, locationForm, setLocationForm, locationTo, setLocationTo, active, setActive, showWithCategories, setShowWithCategories
    }
    return (
        <root.Provider value={value}>
            {children}
        </root.Provider>
    );
};

export const useRoot = () => useContext(root)

export default Root;