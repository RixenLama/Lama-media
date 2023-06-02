import React from 'react'

const PhilosophyCard = () => {
  return (
    <div className=' rounded-sm bg-white w-[100%]'>
      <div className='  w-full h-full my-5'>
      <div className='md:w-[75%] lg:w-[100%] flex items-center justify-center flex-col mb-1'>
      <h3 className='text-center font-extrabold text-black text-[26px] '> TOTAL REVENUE GENERATED</h3>
      <h1 className='text-center font-extrabold text-[#fc3792] max-[1280px]:text-[60px]  md:text-[60px] text-[70px]'> 2500€</h1>
      </div>
      {/* end of */}

      <div className=' w-[100%] max-md:w-[100%] min-[768px]:w-[70%] max-[970px]:w-[115%] min-[769px]:ml-[0rem] lg:ml-0 xl:mt-0 lg:w-[100%] align-middle grid grid-cols-2 max-[970px]:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 max-[481px]:grid-cols-1 gap-x-4 md:gap-x-12 max-[1280px]:gap-y-4 lg:gap-x-10 gap-y-8'>

      <div className=' rounded-[20px] w-[100%] md:w-[125%] lg:w-[115%] xl:w-[100%] lg:h-full max-md:h-full bg-gray-800'>
      <div className='w-[100%]  flex items-start flex-wrap md:pb-2 pb-2  flex-col pl-5 pr-3 pt-5'>
      <h3 className='text-start font-bold max-[1300px]:text-[20px] max-[1100px]:text-[20px] max-[1300px]:text-[20px] text-white text-[24px] '> Clients Help</h3>
      <h1 className='text-start font-bold text-[#fc3792] max-[1100px]:text-[50px] max-[1280px]:text-[50px]  text-[62px] '> 2</h1>
      </div>
      </div>

      <div className=' rounded-[20px] w-[100%] md:w-[125%] lg:w-[115%] xl:w-[100%] h-full bg-gray-800'>
      <div className='w-[100%]   pl-5 pr-3 pt-5 flex pb-2 items-start flex-wrap flex-col'>
      <h3 className='text-start font-bold max-[1100px]:text-[20px] max-[1300px]:text-[20px] text-white text-[20px] '> Website Made</h3>
      <h1 className='text-start font-bold max-[1100px]:text-[50px]  text-[#fc3792] max-[1280px]:text-[50px]   text-[62px] '> 3</h1>
      </div>
      </div>

      <div className='rounded-[20px] w-[100%] md:w-[125%] lg:w-[115%] xl:w-[100%]  h-full bg-gray-800'>
      <div className='w-[100%] pl-5 flex items-start pb-2 flex-wrap flex-col pr-3 pt-5'>
      <h3 className='text-start font-bold max-[1100px]:text-[20px] max-[1300px]:text-[20px] text-white text-[24px] '> OFFERS</h3>
      <h1 className='text-start font-bold text-[#fc3792] max-[1100px]:text-[50px] max-[1280px]:text-[50px] text-[62px] '> 0</h1>
      </div>
      </div>

      <div className='rounded-[20px] w-[100%] md:w-[125%] lg:w-[115%] xl:w-[100%] h-full bg-gray-800'>
      <div className='w-[100%] pl-5  flex items-start pb-2 flex-wrap flex-col pr-3 pt-5'>
      <h3 className='text-start font-bold  max-[1300px]:text-[20px] max-[1100px]:text-[20px] text-white text-[24px] '> SERVICES OFFER</h3>
      <h1 className='text-start font-bold text-[#fc3792] max-[1100px]:text-[50px] max-[1280px]:text-[50px] text-[62px] '> 2</h1>
      </div>
      </div>

      </div>

      </div>
    </div>
  )
}

export default PhilosophyCard
