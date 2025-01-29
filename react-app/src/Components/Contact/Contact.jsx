import React from 'react'
import SocialMediaIcons from '../Sidebar/SocialMediaIcons'

const Contact = () => {
  return (
      <div className='flex flex-row ml-20'>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-bold text-5xl p-1'>Get In Touch !!</div>
            <div className='text-4xl text-red-400 p-1'>Uttkarsh Saini</div>
            <div className='text-1xl p-1'>usaini@mt.iitr.ac.in</div>
            <div className=''><SocialMediaIcons/></div>
          </div>

          <div className='flex flex-col w-100 ml-20 mt-20 justify-evenly'>
            <div className='flex flex-row'>
              <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
              <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
            </div>
            <div><textarea type="text" placeholder="Type here" className="input input-bordered w-96 h-80" /></div>
          </div>
                    
    </div>
  )
}

export default Contact