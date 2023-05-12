import { useState } from 'react';
import Search from './Components/Search';


function App() {
  const [showSearch, setShowSearch] = useState(false)
  const handleForm = () => {
    setShowSearch(true)
  }
  return (
    <>
      <div className="min-h-screen bg-black p-10">
        <div className="h-96 bg-white  border rounded-md shadow-md flex items-center px-10">
          <div className=" h-28 w-full rounded-lg border flex ">
            <div className="w-1/2 flex">
              <div className={`w-1/2 border-r pt-4 cursor-pointer hover:bg-[#eaf5ff] transition duration-400 ease-in-out  ${showSearch ? "bg-[#eaf5ff] " : undefined}`} onClick={() => handleForm()}>
                <div className="px-4">From</div>
                {showSearch && (
                  <Search />)}
              </div>
              <div className="w-1/2 p-4 border-r">
                TO
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
