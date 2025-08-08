import SearchBar from './SearchBar';
import Map from './Map';
import IPDetails from './IPDetails';
import { useEffect, useRef, useState } from 'react';

const App = () => {

  const [ip, setIP]           = useState('');
  const [data, setData]       = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://ipwho.is/${ip}`)
    .then(res => res.json())
    .then(data => {
      
      if(data.success === false)
      {
        setData({
          ip: null,
          country: 'Unknown',
          city: 'Unknown',
          timezone: {
            utc: 'Unknown'
          },
          connection: {
            isp: 'Unknown'
          },
          latitude: 0,
          longitude: 0,
        })
      }
      else
      {
        setIP(data.ip)
        setData(data)
        setLoading(false)
      }
    });

  } , [ip])

  if(loading)
  {
    return (
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className='m-4'>Loading...</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <header
        className="bg-[url('/images/pattern-bg-mobile.png')] md:bg-[url('/images/pattern-bg-desktop.png')] flex flex-col items-center pt-5 lg:pb-20 pb-40 justify-center bg-cover bg-center"
      >
        <h1 className='text-2xl md:text-3xl font-medium text-white'>IP Address Tracker</h1>
        <SearchBar ipAdress={ip} setIpAdress={setIP} />
        <IPDetails ipAdress={ip} data={data} />
      </header>
      <Map data={data} ipAdress={ip} />
    </div>
  )
};

export default App;