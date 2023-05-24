import React from 'react';
import Case from '../page/Case';

const CaseStudy = () => {
  return (
   <div className=" max-[450px]:w-[100%]  w-[100%] bg-cover bg-no-repeat bg bg-transparent bg-[url('https://images.clickfunnels.com/a1/c8a06375354ffb82d8ab0fa724985b/background-case-study.png')]" >
     <div className=" max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%] container md:mx-auto py-[5rem] flex flex-1 flex-col items-center justify-center mx-auto">
      <div className="md:w-[100%] text-center">
        <h1 className="md:text-[22px] text-[#585858] tracking-[3px] font-[900] mb-4">FREE CASE STUDY:</h1>
        <div className=' w-full md:w-[100%] mx-auto'>
        <p className="md:text-4xl text-3xl text-center font-extrabold mb-4 text-[#fc3792]">"How My Agency Is Helping 'New Breed' Info Product & Ecommerce Businesses Scale Aggressively"</p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center md:items-start">
        <div className='md:px-0 w-full md:w-1/2 py-[1rem] pl-[2rem]  pr-[2rem] md:pl-0 md:pr-0 md:p-[3rem]'>
        <img src="https://images.clickfunnels.com/5e/8c0ab307094366ac3693a699be9a8c/ezgif.com-video-to-gif-12-.gif" alt="Case Study GIF" className="w-full mb-4" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start">

        <div className=' pt-[1rem] w-full px-[1rem] md:pt-[3rem] md:w-[30vw]'>
          <div className=' pl-[1rem] md:pl-[2rem] md:px-auto md:w-[170%]'>
          <p className=" tracking-[0.05em] mb-12 text-[20px] text-left text-gray-700 leading-[1.4]">How we consistently generate spine chilling ROI for our clients.</p>
          <p className="tracking-[0.05em] mb-10 text-[20px] text-left text-gray-700 leading-[1.4]">How to achieve 'god like' omni-presence & dominate your competition.</p>
          <p className=" tracking-[0.05em] text-[20px] text-left text-gray-700 leading-[1.4]">Why you need to 'plug the holes' in your sales process before you can drive traffic.</p>
          </div>
          <div className=' flex items-center justify-center md:w-max md:flex-none'>
           <a href='/case'>
           <button className="bg-pink-500 w-max mainBtn text-white mt-20 md:my-8 py-6 md:py-4 px-[1.5rem] md:px-10 rounded-full">
            <span className=' font-bold max-[500px]:text-[24px] text-3xl'>Watch the Free Case Study</span>
          </button>
           </a>
          </div>
        </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CaseStudy;