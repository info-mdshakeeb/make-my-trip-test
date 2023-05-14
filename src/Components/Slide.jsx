import React from 'react';
import { useRoot } from '../Context/Root';

const Slide = ({ data, type }) => {
    const { totalTraveler, setTotalTraveler, adultsTravelerExtra, setAdultsTravelerExtra, adultsTraveler, setAdultsTraveler, childrenTravelerExtra, setChildrenTravelerExtra, childrenTraveler, setChildrenTraveler, infantsTravelerExtra, setInfantsTravelerExtra, infantsTraveler, setInfantsTraveler } = useRoot()



    const max = Math.max(...data);

    return (
        <div className='flex gap-2 text-sm '>
            <div className={`flex border shadow-md  rounded-sm`}>
                {data?.map((item, index) => {
                    return (
                        <div className="" key={index} >
                            {type === "adults" && <>
                                <div className={`${!adultsTravelerExtra && adultsTraveler === item ? "bg-blue-600 text-white scale-110" : 'hover:bg-gray-100'} py-2 px-3  hover:scale-95 `} onClick={
                                    () => { setAdultsTraveler(item); setAdultsTravelerExtra(null) }}>
                                    <h1>{item}</h1>
                                </div>
                            </>}
                            {type === "child" && <>
                                <div className={`${!childrenTravelerExtra && childrenTraveler === item ? "bg-blue-600 text-white scale-110" : 'hover:bg-gray-100'} py-2 px-3  hover:scale-95 `} onClick={
                                    () => { setChildrenTraveler(item); setChildrenTravelerExtra(null) }}>
                                    <h1>{item}</h1>
                                </div>
                            </>}
                            {type === "infants" && <>
                                <div className={`${!infantsTravelerExtra && infantsTraveler === item ? "bg-blue-600 text-white scale-110" : 'hover:bg-gray-100'} py-2 px-3  hover:scale-95 `} onClick={
                                    () => { setInfantsTraveler(item); setInfantsTravelerExtra(null) }}>
                                    <h1>{item}</h1>
                                </div>
                            </>}
                        </div>
                    )
                })}
            </div>
            {type === "adults" && <div onClick={() => { setAdultsTravelerExtra(true); setAdultsTraveler(max) }}
                className={`py-2 px-3 border shadow-md w-9 flex justify-center ${adultsTravelerExtra ? "bg-blue-600 text-white scale-110" : null}`}>
                {`>`} <h1 className='mr-2'>{max}</h1>
            </div>}
            {type === "child" && <div onClick={() => { setChildrenTraveler(max); setChildrenTravelerExtra(true) }}
                className={`py-2 px-3 border shadow-md w-9 flex justify-center ${childrenTravelerExtra ? "bg-blue-600 text-white scale-110" : null}`}>
                {`>`} <h1 className='mr-2'>{max}</h1>
            </div>}
            {type === "infants" && <div onClick={() => { setInfantsTraveler(max); setInfantsTravelerExtra(true) }}
                className={`py-2 px-3 border shadow-md w-9 flex justify-center ${infantsTravelerExtra ? "bg-blue-600 text-white scale-110" : null}`}>
                {`>`} <h1 className='mr-2'>{max}</h1>
            </div>}
        </div>
    );
};

export default Slide;