import React from 'react'

const retirementStrategy = () => {
    return (
        <div className='flex flex-col justify-start space-y-6 bg-gray-50 h-[100vh] border-r-2 p-4 sm:p-0  border-indigo-100 w-full sm:w-1/4 rounded-tr-3xl rounded-br-3xl sm:pr-12'>
            <h1 className='text-gray-800 font-semibold text-lg'>Retirement Strategy</h1>
            <div>
                <label htmlFor="default-range" className="block mb-2 text-xs font-semibold text-gray-800">Employee Contribution</label>
                <input id="default-range" type="range" className="w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer" />

                <label htmlFor="default-range" className="block mb-2 text-xs font-semibold text-gray-800">Retirement Age</label>
                <input id="default-range" type="range" className="border-b-[1px] w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className='border-t-[1px] border-gray-300 pt-4'>

                <div className='flex justify-between mb-2 font-semibold text-gray-800 text-xs'>
                    <p>Employee Contribution</p>
                    <p>8.4%</p>
                </div>
                <div className='flex justify-between mb-2 font-semibold text-gray-800 text-xs'>
                    <p>Interest Rate</p>
                    <p>5%</p>
                </div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="z-25 text-white bg-indigo-600 hover:bg-indigo-700 w-[100%] sm:w-[90%] font-medium mt-4 rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center justify-center" type="button">Update
                </button>
                <div className='hidden sm:flex justify-center pt-4 items-center text-indigo-500'>
                    <p className='text-xs font-semibold'>View help Docs
                    </p>
                    <svg className='h-[14px] pt-1 pl-1 w-[14px]' fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke='currentColor' d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"></path></g>
                    </svg>
                </div>
            </div>

            <div className='hidden sm:inline border-l-[1.8px] pl-4 border-indigo-600'>
                <p className='text-sm text-gray-600 text-semibold'>Are you considering a <br /><b>Housing advance?</b></p>
                <p className='text-xs text-gray-400'>Limited time reduced interest</p>
                <div className='flex items-center text-indigo-500'>
                    <p className='text-xs font-semibold'>Learn more
                    </p>
                    <svg className='h-[14px] pt-1 pl-1 w-[14px]' fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke='currentColor' d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"></path></g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default retirementStrategy
