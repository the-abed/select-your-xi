import React from 'react';
import bannerBG from '../../assets/bg-shadow.png'
import subscribe from '../../assets/Frame 11.png'

const Subscribe = () => {
    return (
        <div id='subscribe' className='w-[1200px] mx-auto mt-8 p-5 border-1 border-gray-100 rounded-3xl '>
            <div className='rounded-3xl text-center p-14 bg-[#f5f4ed]'
            style={{ backgroundImage: `url(${bannerBG})` }}>
                <h1 className='my-3 text-2xl font-bold'>Subscribe to our Newsletter</h1>
                <p className='my-3 text-gray-500'>Get the latest updates and news right in your inbox!</p>
                <div className='flex items-center justify-center'>
                    <input type="email" placeholder='Enter your email' className='m-2 border-1 border-gray-300 rounded-lg w-80 p-3' />  <button className=''><img className='h-12' src={subscribe} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;