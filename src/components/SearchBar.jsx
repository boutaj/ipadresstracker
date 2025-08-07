import { useState } from 'react';
import IconArrow from '../assets/images/icon-arrow.svg'

const SearchBar = ({ipAdress, setIpAdress}) => {

  const [input, setInput] = useState('');

  return (
    <form className="flex items-center" onSubmit={(e) => {e.preventDefault(); setIpAdress(input)}}>
        <input
            className="text-base my-5 bg-white p-3 rounded-l-xl outline-0 md:w-md w-full placeholder-gray-400"
            placeholder="Search for any IP address or domain"
            defaultValue={ipAdress}
            onChange={(e) => {setInput(e.target.value)}}
        />
        <button
            className="flex items-center justify-center bg-black hover:bg-gray-800 transition duration-200 text-white rounded-r-xl h-12 w-12 cursor-pointer"
            type='submit'
        >
            <img src={IconArrow} alt="Search Icon" />
        </button>
    </form>
  )
}

export default SearchBar;