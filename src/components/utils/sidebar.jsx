import React from 'react'

const sidebar = () => {
    return (
        <nav
            className="z-50 fixed left-0 sm:top-0 sm:absolute w-[100vw] h-[10vh] sm:h-[100vh] flex-row sm:flex-col items-center justify-between flex-shrink-0 sm:w-16 py-4 bg-gray-100 sm:bg-white border-r-2 border-indigo-100 shadow-md flex rounded-3xl sm:rounded-[0px] rounded-tl-3xl rounded-bl-3xl"
        >
            <div className="flex sm:w-full sm:flex-col items-center space-y-3 flex-shrink-0 py-4">
                <svg className='w-8 h-8 hidden sm:flex' fill="#1f3bb3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 31.999" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M31.527,23.533c-1.184-2.537-9.388-2.791-9.388-2.791s7.993-4.312,3.996-9.071c-3.997-4.757-3.39-9.196-3.362-10.593 c-1.384,0.478-3.361,2.537-3.361,2.537S18.629,3.065,19.031,0c-12.76,8.166-6.05,20.691-4.439,23.48 c-1.357-0.662-2.451-1.071-2.368-0.971c-0.135,0.014-0.262,0.055-0.375,0.118c-2.72-1.733-5.049-4.033-5.821-5.394 c-0.329-0.577-0.49-2.18-0.661-3.875c-0.198-1.971-0.419-4.163-0.96-5.367C4.48,7.911,4.529,7.804,4.529,7.683 c0-0.256-0.208-0.464-0.465-0.464c-0.257,0-0.465,0.21-0.465,0.466c0,0.257,0.208,0.465,0.464,0.465 c0.044,0,0.083-0.014,0.124-0.025c0.513,1.158,0.73,3.32,0.926,5.262c0.181,1.798,0.336,3.351,0.692,3.977 c0.704,1.237,2.661,3.233,5.033,4.896c-1.677-0.479-8.406-2.579-9.677-5.831c0.141-0.08,0.24-0.225,0.24-0.397 c0-0.256-0.208-0.464-0.465-0.464c-0.256-0.002-0.464,0.206-0.464,0.462c0,0.249,0.197,0.448,0.444,0.461 c1.457,3.834,9.844,6.016,10.209,6.108l0.459,0.24c-0.15,0.172-0.245,0.396-0.245,0.643c0,0.543,0.44,0.983,0.983,0.983 c0.395,0,0.733-0.233,0.89-0.569c0.283,0.384,0.912,1.099,2.092,1.774c0.767,0.44,1.98,0.813,3.12,1.511l1.241,1.108 c0,0,0.115,0.079,0.318,0.202c0.701,0.826,1.225,1.938,1.346,3.507c0.058-0.522,0.354-1.55-0.244-2.925 c1.168,0.539,2.848,1.062,4.225,0.484c2.368-0.994,1.691-1.798,6.217-4.567c-0.592-0.19-1.522-0.951-1.522-0.951 S30.597,23.575,31.527,23.533z"></path> </g> </g></svg>
                <button
                    className='text-gray-100 pl-14 sm:pl-0 rounded'
                >
                    <svg className='w-8 h-8 mix-blend-multiply' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_152)"> <rect width="24" height="24" fill="white"></rect> <circle cx="10.5" cy="10.5" r="6.5" stroke="#808080" strokeLinejoin="round"></circle> <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path> </g> <defs> <clipPath id="clip0_15_152"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                </button>
            </div>
            <div className="flex w-3/4 pr-4 sm:pr-0 sm:flex-col justify-evenly items-center flex-1 p-2 space-y-4">
                <button
                    className='text-white rounded'
                >
                    <svg className='w-12 pt-4 sm:pt-0 h-12 sm:w-8 sm:h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z" fill="#808080"></path> </g></svg>
                </button>
                <button
                    className='text-gray-400'
                >
                    <svg className='w-6 h-6' fill="currentColor" stroke="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 362 362"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m214,266h-204c-5.523,0-10,4.477-10,10v64c0,5.523 4.477,10 10,10h204c5.522,0 10-4.477 10-10v-64c0-5.523-4.478-10-10-10zm-10,64h-184v-44h184v44z"></path> <path d="m352,12h-342c-5.523,0-10,4.477-10,10v64c0,5.523 4.477,10 10,10h342c5.522,0 10-4.477 10-10v-64c0-5.523-4.478-10-10-10zm-10,64h-322v-44h322v44z"></path> <path d="m352,109.25h-204c-5.523,0-10,4.477-10,10v122.75c0,5.523 4.477,10 10,10h204c5.522,0 10-4.477 10-10v-122.75c0-5.523-4.478-10-10-10zm-10,122.75h-184v-102.75h184v102.75z"></path> <path d="M10,252h98.436c5.523,0,10-4.477,10-10V119.25c0-5.523-4.477-10-10-10H10c-5.523,0-10,4.477-10,10V242 C0,247.523,4.477,252,10,252z M20,129.25h78.436V232H20V129.25z"></path> <path d="m352,266h-102c-5.522,0-10,4.477-10,10v64c0,5.523 4.478,10 10,10h102c5.522,0 10-4.477 10-10v-64c0-5.523-4.478-10-10-10zm-10,64h-82v-44h82v44z"></path> <path d="m179,172.625h142c5.522,0 10-4.477 10-10s-4.478-10-10-10h-142c-5.523,0-10,4.477-10,10s4.477,10 10,10z"></path> <path d="m179,208.625h142c5.522,0 10-4.477 10-10s-4.478-10-10-10h-142c-5.523,0-10,4.477-10,10s4.477,10 10,10z"></path> <path d="m83.967,155.876c-3.905-3.905-10.237-3.905-14.143,0l-10.606,10.606-10.606-10.606c-3.905-3.905-10.237-3.905-14.143,0s-3.905,10.237 0,14.143l10.606,10.606-10.606,10.606c-3.905,3.905-3.905,10.237 0,14.143 1.953,1.953 4.512,2.929 7.071,2.929s5.119-0.976 7.071-2.929l10.606-10.606 10.606,10.606c1.953,1.953 4.512,2.929 7.071,2.929s5.119-0.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-10.605-10.606 10.606-10.606c3.906-3.906 3.906-10.238 0.001-14.143z"></path> </g> </g></svg>
                </button>
                <button
                    className='text-gray-400 rounded'
                >
                    <svg className='w-6 h-6' stroke='currentColor' viewBox="0 -4 26 26" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_714" data-name="Group 714" transform="translate(-150 -54)"> <path id="Path_1499" data-name="Path 1499" d="M175,64H155V62h20a1,1,0,0,1,0,2Zm0-8H155V54h20a1,1,0,0,1,0,2ZM150,71a.945.945,0,0,1,1-1h2v2h-2A.945.945,0,0,1,150,71Zm0-8a.945.945,0,0,1,1-1h2v2h-2A.945.945,0,0,1,150,63Zm0-8a.945.945,0,0,1,1-1h2v2h-2A.945.945,0,0,1,150,55Zm26,16a.945.945,0,0,1-1,1H155V70h20A.945.945,0,0,1,176,71Z" fill="#444"></path> </g> </g></svg>
                </button>
                <button
                    className='text-gray-400'
                >
                    <svg className='w-8 h-8' stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_82)">  <g filter="url(#filter0_d_15_82)"> <path d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z" fill="#000000"></path> </g> </g> <defs> <filter id="filter0_d_15_82" x="2.55444" y="3.5" width="18.8911" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="1"></feOffset> <feGaussianBlur stdDeviation="0.5"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_82"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_82" result="shape"></feBlend> </filter> <clipPath id="clip0_15_82"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-col justify-between items-center flex-1 p-2 space-y-4">

                <button
                    className='text-gray-400'
                >
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                </button>
                <button
                    className='text-gray-400'
                >
                    <svg className='w-6 h-6' stroke='currentColor' fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.207 9H5V7h7.136L11.05 5.914 12.464 4.5 16 8.036l-3.536 3.535-1.414-1.414L12.207 9zM10 4H8V2H2v12h6v-2h2v4H0V0h10v4z" fillRule="evenodd"></path> </g></svg>
                </button>
            </div>
        </nav>
    )
}

export default sidebar
