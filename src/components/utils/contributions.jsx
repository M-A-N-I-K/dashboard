import React from 'react'
import ChartSection from './chart'
const Contributions = () => {
    return (
        <div className='flex flex-col justify-between m-4 p-4 w-[40vw]'>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-start pb-2 space-y-1 border-b-[1.2px] border-indigo-700'>
                    <h1 className='text-2xl font-bold'>
                        $300,000
                    </h1>
                    <p className='text-gray-500 text-xs'>
                        My Goal
                    </p>
                </div>
                <div className='flex flex-col justify-start pb-2 space-y-1 border-b-[1.2px] border-indigo-700'>
                    <h1 className='text-2xl font-bold'>
                        59%
                    </h1>
                    <p className='text-gray-500 text-xs'>
                        Goal Achieved
                    </p>
                </div>
                <div className='flex flex-col justify-start pb-2 space-y-1 border-b-[1.2px] border-indigo-700'>
                    <h1 className='text-2xl font-bold'>
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
                <div className='flex justify-between pt-8'>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center pb-2 border-b-[1px] border-gray-300'>
                            <h6 className='font-semibold text-sm'>Age : </h6>
                            <div className='flex pl-2 pt-1 justify-center items-center'>
                                <p className='text-gray-500 font-semibold text-xs'>
                                    Under 30
                                </p>
                                <svg className="w-2.5 h-2.5 ml-2.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center pb-2  border-b-[1px] border-gray-300'>
                            <h6 className='font-semibold text-sm'>Salary : </h6>
                            <div className='flex pl-2 pt-1 justify-center items-center'>
                                <p className='text-gray-500 font-semibold text-xs'>
                                    20k - 30k
                                </p>
                                <svg className="w-2.5 h-2.5 ml-2.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center pb-2  border-b-[1px] border-gray-300'>
                            <h6 className='font-semibold text-sm'>Gender : </h6>
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
                    <div className='flex space-x-2 justify-around'>
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
