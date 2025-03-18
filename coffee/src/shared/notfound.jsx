import React from 'react'
import Lottie from 'react-lottie';
import animationData from '@/assets/NotFound.json';




export const DataNotFoundContainer = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center overflow-hidden'>
            <Lottie options={defaultOptions}
                height='40%'
                width='40%'
            />
            <h1 className='font-semibold font-poppins text-gray-600'>Data Not Found...</h1>
        </div>
    )
}
