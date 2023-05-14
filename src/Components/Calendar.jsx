import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useRoot } from "../Context/Root";
import { generateDate, months } from "../util/calenderFunctions";
import cn from "../util/cn";


export default function Calendar({ type }) {

    const { today, setToday, selectDepartureDate, setSelectDepartureDate, setDeparture, setReturnDate, setSelectReturnDate, selectReturnDate } = useRoot();
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const handelClose = (e) => {
        e.stopPropagation()
        setDeparture(false)
        setReturnDate(false)
    }
    return (
        <div className={`w-[340px] bg-white border shadow-md rounded-lg z-30 relative  -ml-5 ${!selectReturnDate ? "-mt-[45px]" : "-mt-[56px]"} `}>
            <div className="flex justify-between items-center px-4 mt-4">
                <h1 className="select-none font-semibold">
                    {months[today.month()]}, {today.year()}
                </h1>
                <div className="flex gap-10 items-center ">
                    <GrFormPrevious
                        className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                        onClick={() => {
                            setToday(today.month(today.month() - 1));
                        }}
                    />
                    <h1
                        className=" cursor-pointer hover:scale-105 transition-all"
                        onClick={() => { setToday(currentDate); }}
                    >Today </h1>
                    <GrFormNext
                        className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                        onClick={() => {
                            setToday(today.month(today.month() + 1));
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 ">
                {days.map((day, index) => {
                    return (
                        <h1 key={index} className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                        >{day}</h1>
                    );
                })}
            </div>
            <div className=" grid grid-cols-7 ">
                {generateDate(today.month(), today.year()).map(
                    ({ date, currentMonth, today }, index) => {
                        return (
                            <div
                                onClick={handelClose}
                                key={index} className="p-2 text-center h-10 grid place-content-center text-sm border-t"
                            >  <h1 className={cn(
                                currentMonth ? "" : "text-gray-400",
                                today
                                    ? "bg-red-600 text-white"
                                    : "",
                                selectDepartureDate
                                    .toDate()
                                    .toDateString() ===
                                    date.toDate().toDateString()
                                    ? "bg-black text-white"
                                    : "",
                                "h-10 w-10  grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                            )} onClick={(e) => {
                                if (type === "start") {
                                    setSelectDepartureDate(date)
                                } else if (type === "end") { setSelectReturnDate(date) }
                            }}>
                                    <div className="">
                                        {date.date()}
                                        {/* <p>{(Math.random() * 1000).toFixed()}</p> */}
                                    </div>
                                </h1>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}