import { useState } from 'react';
import Calendar from './Components/Calendar';
import Search from './Components/Search';


function App() {
  const [showSearchForm, setShowSearchForm] = useState(false)
  const [showSearchTo, setShowSearchTo] = useState(false)
  const [departure, setDeparture] = useState(false)
  const [returnDate, setReturnDate] = useState(false)
  const headFunction = () => {
    setShowSearchForm(false)
    setShowSearchTo(false)
    setDeparture(false)
    setReturnDate(false)
  }
  const handleForm = (e) => {
    e.stopPropagation()
    setShowSearchForm(true)
    setShowSearchTo(false)
    setDeparture(false)
  }
  const handleTo = (e) => {
    e.stopPropagation()
    setShowSearchTo(true)
    setShowSearchForm(false)
    setDeparture(false)
  }
  const handleDeparture = (e) => {
    e.stopPropagation()
    setDeparture(true)
    setShowSearchForm(false)
    setShowSearchTo(false)

  }
  const handleReturn = (e) => {
    e.stopPropagation()
    setReturnDate(true)
    setShowSearchForm(false)
    setDeparture(false)
    setShowSearchTo(false)
  }
  return (
    <>
      <div className="min-h-screen bg-black p-10" onClick={headFunction}>
        <div className="h-96 bg-white  border rounded-md shadow-md flex items-center px-10">
          <div className="h-28 w-full rounded-lg border flex ">
            <div className="w-1/2 flex">
              <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${showSearchForm ? "bg-[#eaf5ff] " : undefined}`} onClick={handleForm}>
                <div className="px-4">From</div>
                {showSearchForm && (
                  <Search />)}
              </div>
              <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff]  transition duration-400 ease-in-out  ${showSearchTo ? "bg-[#eaf5ff] " : undefined}`} onClick={handleTo}>
                <div className="px-4">To</div>
                {showSearchTo && (
                  <Search />)}
              </div>
            </div>
            <div className="w-1/2 flex">
              <div className={` w-40 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${departure ? "bg-[#eaf5ff] " : undefined}`} onClick={handleDeparture}>
                <div className="px-4">Departure</div>
                {departure && (
                  <Calendar />)}
              </div>
              <div className={` w-40 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${returnDate ? "bg-[#eaf5ff] " : undefined}`} onClick={handleReturn}>
                <div className="px-4">Return</div>
                {returnDate && (
                  <Calendar />)}
              </div>
              {/* <div className={` flex-1 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${returnDate ? "bg-[#eaf5ff] " : undefined}`} onClick={handleDeparture}>
                <div className="px-4">Return</div>
                {departure && (
                  <Calendar />)}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
