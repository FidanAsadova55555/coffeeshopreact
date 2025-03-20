import React from 'react'
import Lottie from 'react-lottie';
import animationData from '@/assets/Loading.json';




export const Loading = () => {
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
            <h1 className='font-semibold font-poppins text-[#B8784E]'>A little patience, just like slow brew...
            </h1>
        </div>
    )
}
