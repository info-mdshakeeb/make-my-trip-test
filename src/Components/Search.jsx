import React from 'react';

const Search = () => {
    return (
        <div className='h-60 shadow-md w-[340px] bg-white overflow-y-scroll mt-3 rounded-md'>
            <input type="text" placeholder="Search" className=" p-3 rounded-md border  w-full" />
        </div>
    );
};

export default Search;