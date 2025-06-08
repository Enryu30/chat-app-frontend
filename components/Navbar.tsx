import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between  fixed top-0 left-0 right-0 bg-white items-center z-50 border-b h-16 py-5 px-5'>
      <Image
        src="/next.svg"
        width={50}
        height={50}
        alt="App Logo"
      />
      
      <div className= {`w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 `}>
            SV
          </div>
    </div>
  )
}

export default Navbar