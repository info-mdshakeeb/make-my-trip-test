import { useRoot } from "../Context/Root";



const TicketClass = ({ classType }) => {
    const { ticketClass, setTicketClass } = useRoot()

    return (
        <div className={`border shadow-md  rounded-sm text-xs flex gap-3 w-[375px] items-center justify-center  `}>
            {
                classType.map((item, index) => {
                    return (
                        <div key={index}
                            onClick={() => setTicketClass(item)}
                            className={`${ticketClass === item ? "bg-blue-600 text-white scale-110" : 'hover:bg-gray-100'} py-2 px-1  hover:scale-95 `}>
                            <h1>{item}</h1>
                        </div>
                    )
                }
                )
            }
        </div>
    );
};

export default TicketClass;