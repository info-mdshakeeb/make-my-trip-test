import { IoIosArrowDown } from "react-icons/io";
import formLocation from '../public/formLocation.json';
import toLocation from '../public/toLocation.json';
import Calendar from './Components/Calendar';
import Categories from "./Components/Categories";
import Search from './Components/Search';
import Traveler from './Components/Traveler';
import { useRoot } from "./Context/Root";

function App() {
  // load all sate from root context :
  const { selectDepartureDate, showSearchForm, setShowSearchForm, showSearchTo, setShowSearchTo, departure, setDeparture, returnDate, setReturnDate, selectReturnDate, showTraveler, setShowTraveler, totalTraveler, ticketClass, adultsTraveler, infantsTraveler, locationForm, locationTo, showWithCategories, setActive, setShowWithCategories } = useRoot()

  // handle show and hide search form :
  const headFunction = () => {
    setShowSearchForm(false)
    setShowSearchTo(false)
    setDeparture(false)
    setReturnDate(false)
    setShowTraveler(false)
  }
  const handleForm = (e) => {
    e.stopPropagation()
    setShowSearchForm(true)
    setShowSearchTo(false)
    setDeparture(false)
    setReturnDate(false)
    setShowTraveler(false)
  }
  const handleTo = (e) => {
    e.stopPropagation()
    setShowSearchTo(true)
    setShowSearchForm(false)
    setDeparture(false)
    setReturnDate(false)
    setShowTraveler(false)
  }
  const handleDeparture = (e) => {
    e.stopPropagation()
    setDeparture(true)
    setShowSearchForm(false)
    setShowSearchTo(false)
    setReturnDate(false)
    setShowTraveler(false)
  }
  const handleReturn = (e) => {
    e.stopPropagation()
    setReturnDate(true)
    setShowSearchForm(false)
    setDeparture(false)
    setShowSearchTo(false)
    setShowTraveler(false)
    setActive("round trip")
    setShowWithCategories(true)
  }
  const handleTraveler = (e) => {
    e.stopPropagation()
    setReturnDate(false)
    setShowSearchForm(false)
    setDeparture(false)
    setShowSearchTo(false)
    setShowTraveler(true)
  }
  return (
    <div className="h-screen bg-white" onClick={headFunction}>
      <div className='bg-[url(./assets/download.webp)] object-fill bg-no-repeat h-[550px] p-10' >
        <div className=" container  mx-auto px-[60px] py-[40px]" >
          <div className="h-80 bg-white  border rounded-md shadow-md flex flex-col items-center justify-center px-10">
            {/* categories section  */}
            <Categories />
            {/* categories section end  */}

            {/* form section */}
            <div className="h-28 w-full rounded-lg border flex ">
              {/* first part form and to  */}
              <div className="w-1/2 flex">
                {/* form section  start */}
                <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${showSearchForm ? "bg-[#eaf5ff] " : undefined}`} onClick={handleForm}>
                  <div className="px-4">From</div>
                  <div className="px-3">
                    <p className='text-3xl font-bold'>{locationForm?.countryName}</p>
                    <p className='text-gray-600'>{locationForm?.airportLocation}</p>
                  </div>
                  {showSearchForm && (
                    <Search type={"form"} data={formLocation.data} />)}
                </div>
                {/* form section  end */}

                {/* to section  start */}
                <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff]  transition duration-400 ease-in-out  ${showSearchTo ? "bg-[#eaf5ff] " : undefined}`} onClick={handleTo}>
                  <div className="px-4">To</div>
                  <div className="px-3">
                    <p className='text-3xl font-bold'>{locationTo?.countryName}</p>
                    <p className='text-gray-600'>{locationTo?.airportLocation}</p>
                  </div>
                  {showSearchTo && (
                    <Search type={"to"} data={toLocation?.data} />)}
                </div>
                {/* to section  end */}
              </div>
              {/* first part form and to end  */}

              {/* second part departure and return and totalTraveler  */}
              <div className="w-1/2 flex">
                {/* departure section  start */}
                <div className={` w-40 border-r pt-3 px-5 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${departure ? "bg-[#eaf5ff] " : undefined}`} onClick={handleDeparture}>
                  <div className="">Departure
                    <IoIosArrowDown className="inline-block ml-2 text-blue-500" />
                  </div>
                  <p><span className="text-3xl font-bold">
                    {selectDepartureDate.format('DD')}</span>
                    <span>{selectDepartureDate.format('MMM')}'</span>
                    <span>{selectDepartureDate.format('YYYY')}</span>
                    <br />
                    <span>{selectDepartureDate.format('dddd')}</span>
                  </p>
                  {departure && (
                    <Calendar type={"start"} />)}
                </div>
                {/* departure section  end */}

                {/* return section start */}
                <div className={` w-40 border-r pt-4 px-5 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${returnDate ? "bg-[#eaf5ff] " : undefined}`} onClick={handleReturn}>
                  <div className="">Return
                    <IoIosArrowDown className="inline-block ml-2 text-blue-500" />
                  </div>
                  {selectReturnDate && showWithCategories ? <p><span className="text-3xl font-bold">
                    {selectReturnDate.format('DD')}</span>
                    <span>{selectReturnDate.format('MMM')}'</span>
                    <span>{selectReturnDate.format('YYYY')}</span>
                    <br />
                    <span>{selectReturnDate.format('dddd')}</span>
                  </p> : <p>Choose Return Date</p>}
                  {returnDate && (
                    <Calendar type={"end"} />)}
                </div>
                {/* return section end */}
                {/* totalTraveler section start */}
                <div className={` w-52  pt-4  px-5 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out   ${showTraveler ? "bg-[#eaf5ff] " : undefined}`} onClick={handleTraveler}>
                  <p className="">Travellers & Class
                    <IoIosArrowDown className="inline-block ml-2 text-blue-500" /></p>
                  <p><span className="text-3xl font-bold">{totalTraveler}</span> Traveler <br />
                    <span className='text-xs'>{ticketClass} </span>
                  </p>
                  {adultsTraveler < infantsTraveler ?
                    <div className=" relative top-0">
                      <p className='text-xs bg-red-300 text-red-700 px-2'>Number of infants cannot be more than adults</p>
                    </div> : null}
                  <div className={`${adultsTraveler < infantsTraveler ? '-mt-[90px]' : '-mt-14'}`}>
                    {showTraveler && (
                      <Traveler />)}
                  </div>
                </div>
                {/* totalTraveler section end */}
              </div>
              {/* second part departure and return and totalTraveler end  */}
            </div>
            {/* form section end */}

            {/* Fare Type section */}
            <div className="flex h-16 mt-6 w-full justify-between">
              <div className="">
                <p>Select A Fare Type:</p>
              </div>
              <div className="">
                Trending Searches:
              </div>
            </div>
            {/* Fare Type section end */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
