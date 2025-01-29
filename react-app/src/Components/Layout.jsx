import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Contact from './Contact/Contact'

const Layout = () => {
  return (
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center">
        <Contact/>
          
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
              <Sidebar/>
            </ul>
        </div>
    </div>
  )
}

export default Layout