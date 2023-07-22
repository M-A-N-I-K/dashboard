import React from 'react'
import Sidebar from './components/utils/sidebar'
import Home from './components/home'
const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
