import { useRef } from 'react';
import IconArrow from '../assets/images/icon-arrow.svg'

const SearchBar = ({ipAdress, setIpAdress}) => {

  const ipInput = useRef();
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;
  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;


  function handleData(e)
  {
    e.preventDefault();

    let value = ipInput.current.value;

    // If the user input is domain
    if(domainRegex.test(value))
      fetch(`https://dns.google/resolve?name=${value}&type=A`)
      .then(res => res.json())
      .then(data => setIpAdress(data.Answer?.[0]?.data))
    
    // If the user input is IP
    if(ipv4Regex.test(value))
      setIpAdress(value)

    return null;
  }

  return (
    <form className="flex items-center" onSubmit={(e) => handleData(e)}>
        <input
            className="text-base my-5 bg-white p-3 rounded-l-xl outline-0 md:w-md w-full placeholder-gray-400"
            placeholder="Search for any IP address or domain"
            defaultValue={ipAdress}
            ref={ipInput}
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