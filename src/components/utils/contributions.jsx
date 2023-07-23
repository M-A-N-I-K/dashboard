import React from 'react'
import ChartSection from './chart'
const Contributions = () => {
    return (
        <div className='flex space-y-3 flex-col w-full justify-between p-6 sm:w-2/4'>
            <div className='flex flex-col'>
                <h1 className=' text-indigo-600 font-bold text-sm'>Retirement Income</h1>
                <h1 className=' text-black font-bold text-xl'>Starting Year 2056</h1>
            </div>
            <div className='flex flex-col w-2/3 sm:w-full sm:flex-row justify-between'>
                <div className='flex flex-col sm:w-1/3 sm:m-2 justify-start pb-2 space-y-1 border-b-[1.2px] border-indigo-700'>
                    <h1 className='text-xl font-bold'>
                        $300,000
                    </h1>
                    <p className='text-gray-500 text-xs'>
                        My Goal
                    </p>
                </div>
                <div className='flex flex-col sm:w-1/3 sm:m-2 justify-start pb-2 space-y-1 border-b-[1.2px] border-indigo-700'>
                    <h1 className='text-xl font-bold'>
                        59%
                    </h1>
                    <p className='text-gray-500 text-xs'>
                        Goal Achieved
                    </p>
                </div>
                <div className='flex flex-col sm:w-1/3 sm:m-2 justify-start pb-2 space-y-1 border-b-[1.2px] border-indigo-700'>
                    <h1 className='text-xl font-bold'>
                        $300
                    </h1>
                    <p className='text-gray-500 text-xs'>
                        Est. Monthly Income
                    </p>
                </div>

            </div>
            <ChartSection />
            <div className='flex flex-col'>
                <h6 className='text-lg text-gray-800 font-semibold'>How do i compare to my peers?</h6>
                <h6 className='text-sm text-gray-500 font-normal'>These numbers represent current goal achievement</h6>
                <div className='flex flex-col w-full sm:flex-row items-start justify-between pt-2'>
                    <div className='flex flex-col w-3/4 sm:w-1/2 mt-4 sm:mt-0 space-y-2'>
                        <div className='flex items-center pb-2 border-b-[1px] border-gray-300'>
                            <h6 className='font-semibold text-xs'>Age : </h6>
                            <div className='flex pl-2 pt-1 justify-center items-center'>
                                <p className='text-gray-500 font-semibold text-xs'>
                                    Under 30
                                </p>
                                <svg className="w-2.5 h-2.5 ml-2.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center pb-1  border-b-[1px] border-gray-300'>
                            <h6 className='font-semibold text-xs'>Salary : </h6>
                            <div className='flex pl-2 pt-1 justify-center items-center'>
                                <p className='text-gray-500 font-semibold text-xs'>
                                    20k - 30k
                                </p>
                                <svg className="w-2.5 h-2.5 ml-2.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center pb-1  border-b-[1px] border-gray-300'>
                            <h6 className='font-semibold text-xs'>Gender : </h6>
                            <div className='flex pl-2 pt-1 justify-center items-center'>
                                <p className='text-gray-500 font-semibold text-xs'>
                                    Male
                                </p>
                                <svg className="w-2.5 h-2.5 ml-2.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-4 sm:mt-0 w-3/4 space-x-2 justify-between sm:justify-around'>
                        <div>

                            <svg viewBox="0 0 36 36" className='h-20 w-20 text-green-400'>
                                <path
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeDasharray="78, 100"
                                />
                                <text x="11" y="20" className="font-bold text-[8px] text-gray-500">78%</text>
                            </svg>
                            <p className='text-gray-500 text-xs text-center'>Average</p>
                        </div>
                        <div>
                            <svg viewBox="0 0 36 36" className='h-20 w-20 text-green-400'>
                                <path
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeDasharray="95, 100"
                                />
                                <text x="11" y="20" className="font-bold text-[8px] text-gray-500">95%</text>
                            </svg>
                            <p className='text-gray-500 text-xs text-center'>Top</p>
                        </div>
                        <div>

                            <svg viewBox="0 0 36 36" className='h-20 w-20 text-green-400'>
                                <path
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeDasharray="59, 100"
                                />
                                <text x="11" y="20" className="font-bold text-[8px] text-gray-500">59%</text>
                            </svg>
                            <p className='text-gray-500 text-xs text-center'>Me</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contributions
