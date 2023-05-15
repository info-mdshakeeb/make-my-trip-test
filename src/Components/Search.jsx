import React, { useEffect, useState } from 'react';
import { RiFlightTakeoffFill } from 'react-icons/ri';
import formLocation from '../../public/formLocation.json';
import { useRoot } from '../Context/Root';

const Search = ({ type, data }) => {
    const { setLocationForm, setLocationTo, setShowSearchForm, setShowSearchTo } = useRoot()
    //load limited data from json file
    const limitedData = data.slice(0, 6);
    // implement search functionality
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        if (search?.length > 0) {
            const filterResult = data.filter(u => u?.countryName?.toLowerCase().includes(search?.toLowerCase()))
            setSearchData(filterResult)
        } else {
            setSearchData(limitedData)
        }
    }, [search, formLocation.data]);
    const handelClose = (e) => {
        e.stopPropagation(); setShowSearchForm(false); setShowSearchTo(false)
    }
    return (
        <div className='h-60 shadow-md w-[340px] bg-white overflow-y-scroll  rounded-md z-30 relative -mt-14'>
            <form className="mb-1 sticky top-0">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Search" className=" p-3 rounded-md border  w-full" />
            </form>
            {searchData.length ? <div className="">
                {
                    searchData.map((item, i) => (
                        <div key={i} onClick={handelClose}>
                            <div
                                onClick={() => {
                                    if (type === "form") {
                                        setLocationForm(item)
                                        setShowSearchForm(false)
                                    }
                                    else if (type === "to") { setLocationTo(item) }
                                }}
                                className="flex items-center border-b py-1  cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out text-sm pl-5">
                                <RiFlightTakeoffFill className="text-2xl mr-5" />
                                <div className="flex justify-between w-full items-center">
                                    <div className="flex flex-col">
                                        <div className="text-sm">{item?.countryName}</div>
                                        <div className="text-xs">{item?.airportLocation}</div>
                                    </div>
                                    <div className="mr-10">
                                        <div className="text-xs">{item?.sortForm}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> : <div className="flex justify-center items-center h-20">
                no country found
            </div>
            }
        </div>
    );
};

export default Search;