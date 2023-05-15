import React from 'react';
import { BsCheck } from "react-icons/bs";
import { useRoot } from '../Context/Root';

const Categories = () => {
    const { active, setActive, setShowWithCategories } = useRoot()
    const categories = ["one way", "round trip"]
    return (
        <>
            <div className="flex justify-between h-16 items-center w-full">
                <div className='flex gap-3'>
                    {categories.map((item, i) =>
                        <div onClick={() => {
                            setActive(item)
                            if (item === "one way") {
                                setShowWithCategories(false)
                                return
                            }
                            setShowWithCategories(true)
                        }
                        }

                            className={`flex items-center cursor-pointer  ${active === item ? "bg-[#eaf5ff] " : ""} px-2 rounded-full`} key={i}>
                            <div className={` ${active === item ? "bg-blue-500  " : ""} gap-3
                            h-4 w-4 rounded-full border mr-1 flex items-center justify-center `} >
                                {active === item && <BsCheck className="text-white" />}
                            </div>
                            <div className="">{item}</div>
                        </div>
                    )}
                </div>
                <div className=" font-bold">Book International and Domestic Flights</div>
            </div>
        </>
    );
};

export default Categories;