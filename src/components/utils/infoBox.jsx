import React from 'react'

const InfoBox = () => {
    return (
        <div className="h-[100vh] p-5 m-0 sm:ml-14 w-[100vw] sm:w-[30vw] bg-gray-50 shadow-lg rounded-sm border border-gray-200">
            <div className="flex items-center px-8">
                <img className="w-14 h-14 rounded-full" src="https://preview.cruip.com/mosaic/images/user-64-01.jpg" alt="Rounded avatar"></img>
                <div className="mx-4">
                    <div className="flex flex-col text-gray-800 hover:text-gray-900" href="#0">
                        <h2 className="text-xl leading-snug justify-center font-semibold">Hi Mike,</h2>
                        <p className='text-xs font-semibold text-gray-600'>welcome back.</p>
                    </div>
                </div>
            </div>
            <div className='flex px-8 p-4 font-bold text-md flex-col'>
                <p className='font-bold text-black'>Today</p>
                <h1 className='font-bold text-3xl sm:text-2xl mt-3'>$19,892</h1>
                <p className='text-gray-600 font-normal text-xs'>Account Balance</p>
                <div className='flex sm:flex-col justify-between'>
                    <div className='flex flex-col'>
                        <h6 className='mt-2'>$4,000</h6>
                        <p className='text-gray-600 font-normal text-xs'>Year-to-date<span className='hidden sm:inline-flex'>-contributions</span></p>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='mt-2'>$1,982</h6>
                        <p className='text-gray-600 font-normal text-xs'>Total Interest</p>
                    </div>
                </div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-indigo-600 hover:bg-indigo-700 w-full sm:w-[60%] font-medium mt-4 rounded-lg text-xs px-4 py-2.5 sm:py-3 text-center inline-flex items-center justify-center" type="button"><p>I want to</p>
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
            </div>
            <div className='flex px-8 p-4 text-gray-600 font-semibold text-sm flex-col justify-between'>
                <h6 className='font-bold text-black text-md'>Recent Transactions</h6>
                <p className='mt-2 font-normal text-xs'>2020-08-07</p>
                <h6 className='border-b-[1px] pb-4 text-black border-gray-300'>Withdrawal transfer to Bank-XX11</h6>
                <p className='mt-2 font-normal text-xs'>2020-08-07</p>
                <h6 className='border-b-[1px] text-black pb-4 border-gray-300'>Withdrawal transfer to Bank-XX11</h6>
                <p className='mt-2 font-normal text-xs'>2020-08-07</p>
                <h6 className='border-b-[1px] text-black pb-4 border-gray-300'>Withdrawal transfer to Bank-XX11</h6>
            </div>

        </div>
    )
}

export default InfoBox
