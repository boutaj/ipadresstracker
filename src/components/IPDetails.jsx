const IPDetails = ({ipAdress, data}) => {
  return (
    <div className='w-73 lg:w-auto flex flex-col lg:flex-row text-center lg:text-start top-35 lg:top-40 z-999 absolute bg-white py-4 px-9 lg:p-5 rounded-xl'>
        <div className='m-3 lg:border-r-1 lg:border-gray-200 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>IP Address</p>
            <h2 className='text-xl lg:text-2xl font-medium'>{ipAdress}</h2>
        </div>
        <div className='m-3 lg:border-r-1 lg:border-gray-200 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>Location</p>
            <h2 className='text-xl lg:text-2xl font-medium lg:w-40'>{data.city}, {data.country  }</h2>
        </div>
        <div className='m-3 lg:border-r-1 lg:border-gray-200 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>Timezone</p>
            <h2 className='text-xl lg:text-2xl font-medium'>UTC {data.timezone?.utc}</h2>
        </div>
        <div className='m-3 lg:pr-12'>
            <p className='text-xs text-gray-500 font-medium uppercase mb-1'>ISP</p>
            <h2 className='text-xl lg:text-2xl font-medium lg:w-40'>{data.connection?.isp}</h2>
        </div>
    </div>
  )
}

export default IPDetails;