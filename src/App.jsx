import formLocation from '../public/formLocation.json';
import toLocation from '../public/toLocation.json';
import Calendar from './Components/Calendar';
import Search from './Components/Search';
import Traveler from './Components/Traveler';
import { useRoot } from "./Context/Root";


function App() {
  const { selectDepartureDate, showSearchForm, setShowSearchForm, showSearchTo, setShowSearchTo, departure, setDeparture, returnDate, setReturnDate, selectReturnDate, showTraveler, setShowTraveler, totalTraveler, ticketClass, adultsTraveler, infantsTraveler, locationForm, locationTo } = useRoot()

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
    <div className='bg-black p-10'>
      <div className="min-h-screen  max-w-[85%] mx-auto" onClick={headFunction}>
        <div className="h-96 bg-white  border rounded-md shadow-md flex items-center px-10">
          <div className="h-28 w-full rounded-lg border flex ">
            <div className="w-1/2 flex">
              <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${showSearchForm ? "bg-[#eaf5ff] " : undefined}`} onClick={handleForm}>
                <div className="px-4">From</div>
                <div className="px-3">
                  <p className='text-3xl font-bold'>{locationForm?.countryName}</p>
                  <p className='text-gray-600'>{locationForm?.airportLocation}</p>
                </div>
                {showSearchForm && (
                  <Search type={"form"} data={formLocation.data} />)}
              </div>
              <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff]  transition duration-400 ease-in-out  ${showSearchTo ? "bg-[#eaf5ff] " : undefined}`} onClick={handleTo}>
                <div className="px-4">To</div>
                <div className="px-3">
                  <p className='text-3xl font-bold'>{locationTo?.countryName}</p>
                  <p className='text-gray-600'>{locationTo?.airportLocation}</p>
                </div>
                {showSearchTo && (
                  <Search type={"to"} data={toLocation?.data} />)}
              </div>
            </div>
            <div className="w-1/2 flex">
              <div className={` w-40 border-r pt-3 px-5 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${departure ? "bg-[#eaf5ff] " : undefined}`} onClick={handleDeparture}>
                <div className="">Departure</div>
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
              <div className={` w-40 border-r pt-4 px-5 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${returnDate ? "bg-[#eaf5ff] " : undefined}`} onClick={handleReturn}>
                <div className="">Return</div>
                {selectReturnDate ? <p><span className="text-3xl font-bold">
                  {selectReturnDate.format('DD')}</span>
                  <span>{selectReturnDate.format('MMM')}'</span>
                  <span>{selectReturnDate.format('YYYY')}</span>
                  <br />
                  <span>{selectReturnDate.format('dddd')}</span>
                </p> : <p>Choose Return Date</p>}
                {returnDate && (
                  <Calendar type={"end"} />)}
              </div>
              <div className={` w-52  pt-4  px-5 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out   ${showTraveler ? "bg-[#eaf5ff] " : undefined}`} onClick={handleTraveler}>
                <p className="">Travellers & Class</p>
                <p><span className="text-3xl font-bold">{totalTraveler}</span> Traveler <br />
                  <span className='text-xs'>{ticketClass} </span>
                </p>
                {adultsTraveler < infantsTraveler ?
                  <div className=" relative top-4">
                    <p className='text-xs bg-red-300 text-red-700'>Number of infants cannot be more than adults</p>
                  </div> : null}
                <div className={`${adultsTraveler < infantsTraveler ? '-mt-[90px]' : '-mt-14'}`}>
                  {showTraveler && (
                    <Traveler />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
