const IPDetails = ({ipAdress, data}) => {

  function getUTCTimeZone(timeZone) {

    if(timeZone == 'Unknown')
      return 'Unknown'

    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'shortOffset' });
    const parts = formatter.formatToParts(date);
    
    const offsetPart = parts.find(part => part.type === 'timeZoneName');
    return offsetPart.value;
  }

  return (
    <div className='w-73 lg:w-auto flex flex-col lg:flex-row text-center lg:text-start top-35 lg:top-40 z-999 absolute bg-white py-4 px-9 lg:p-5 rounded-xl'>
        <div className='m-3 lg:border-r-1 lg:border-gray-200 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>IP Address</p>
            <h2 className='text-xl lg:text-2xl font-medium'>{ipAdress}</h2>
        </div>
        <div className='m-3 lg:border-r-1 lg:border-gray-200 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>Location</p>
            <h2 className='text-xl lg:text-2xl font-medium lg:w-40'>{data['city']}, {data['country']}</h2>
        </div>
        <div className='m-3 lg:border-r-1 lg:border-gray-200 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>Timezone</p>
            <h2 className='text-xl lg:text-2xl font-medium'>{getUTCTimeZone(data['timezone'])}</h2>
        </div>
        <div className='m-3 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>ISP</p>
            <h2 className='text-xl lg:text-2xl font-medium lg:w-40'>{data['isp']}</h2>
        </div>
    </div>
  )
}

export default IPDetails;