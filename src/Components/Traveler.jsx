import React from 'react';
import { useRoot } from '../Context/Root';
import Slide from './Slide';
import TicketClass from './TicketClass';

const Traveler = () => {
    const { handelTotalTravel, infantsTraveler, adultsTraveler } = useRoot()
    const dataAdults = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const dataChildren = [0, 1, 2, 3, 4, 5, 6]
    const classType = ["Economy/Premium Economy", "Premium Economy", "Business",]

    return (
        <div className={`h-[355px] shadow-md w-[640px] -ml-[450px] bg-white border  rounded-md z-30 relative py-6 px-10 `}>
            <div className="">
                <p> ADULTS (12y +)</p>
                <span className='text-sm opacity-40'>on the day of travel</span>
                <Slide data={dataAdults} type={'adults'} />
            </div>
            <div className=" mt-7 flex gap-4">
                <div className="">
                    <p>CHILDREN (2y - 12y )</p>
                    <span className='text-sm opacity-40'>on the day of travel</span>
                    <Slide data={dataChildren} type={'child'} />
                </div>
                <div className="">
                    <p> INFANTS (below 2y)</p>
                    <span className='text-sm opacity-40'>on the day of travel</span>
                    <Slide data={dataChildren} type={'infants'} />
                </div>
            </div>
            <div className="mt-5">
                <p className='pb-1'>CHOOSE TRAVEL CLASS</p>
                <TicketClass classType={classType} />
            </div>
            {adultsTraveler < infantsTraveler &&
                <div className='flex justify-between'>
                    <p className='mt-3 text-red-400'>Number of infants cannot be more than adults</p>
                    <button disabled
                        className={` px-6 py-1  rounded-full shadow-md  focus:outline-none focus:ring-2 bg-gray-700 text-white cursor-pointer  `}
                    >
                        APPLY
                    </button>
                </div>

            }
            <div className=" w-full flex justify-end text-sm">
                {adultsTraveler >= infantsTraveler ?
                    <button
                        className={` hover:bg-blue-700  px-6 py-1  bg-blue-500 text-white font-semibold rounded-full shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  `}
                        onClick={handelTotalTravel}>
                        APPLY
                    </button> : null
                }

            </div>
        </div>
    );
};

export default Traveler;