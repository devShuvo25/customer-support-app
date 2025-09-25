import React from 'react';
import bannerImg1 from '../../assets/vector1.png'
// import bannerImg2 from '../../assets/vector2.png'

const Banner = ({openedTickets}) => {
    return (
        
           <div className='flex flex-col lg:flex-row gap-5 lg:px-20  items-center justify-between py-5 lg:py-20 px-5 mx-auto'>
             <div className="relative w-[100%] lg:[50%] h-[150px] lg:h-[250px] bg-gradient-to-br
              from-[#632EE3] to-[#9F62F2] border-none rounded-xl">
                <div className='absolute left-[40%] top-[35%] text-center space-y-5'><h1 className=' text-white lg:text-4xl'>In Progress</h1>
                <span className='text-3xl lg:text-5xl text-center font-bold text-white'>{openedTickets.length}</span></div>
                 <img src={bannerImg1} alt="" />
                <img className='absolute transform scale-x-[-1] top-0 right-0' src={bannerImg1} alt="" />
             </div>
            <div className='relative w-[100%] lg:[50%] h-[150px] lg:h-[250px]  bg-gradient-to-br from-[#54CF68] to-[#00827A] border-none rounded-xl'>
              <div className='absolute left-[40%] top-[35%] text-center space-y-5'><h1 className=' text-white lg:text-4xl'>Resolved</h1>
                <span className='text-3xl lg:text-5xl text-center font-bold text-white'>0</span></div>
                 <img className='top-0 left-0' src={bannerImg1} alt="" />
                 <img className='absolute transform scale-x-[-1] top-0 right-0' src={bannerImg1} alt="" />
            </div>
            <div></div>
           </div>
        
    );
};

export default Banner;