import dayjs from "dayjs";
import React, { createContext, useContext, useState } from 'react';
export const root = createContext();
const Root = ({ children }) => {

    //date picker
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    //search form
    const [showSearchForm, setShowSearchForm] = useState(false)
    const [showSearchTo, setShowSearchTo] = useState(false)
    const [departure, setDeparture] = useState(false)
    const [returnDate, setReturnDate] = useState(false)
    const value = {
        today, setToday, selectDate, setSelectDate, showSearchForm, setShowSearchForm, showSearchTo, setShowSearchTo, departure, setDeparture, returnDate, setReturnDate
    }
    return (
        <root.Provider value={value}>
            {children}
        </root.Provider>
    );
};

export const useRoot = () => useContext(root)

export default Root;