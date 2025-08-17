"use client";

import { Home, SidebarIcon } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  }

  return (
      <div className='flex flex-col'>
  
      <nav className='px-4 py-2 bg-gray-200 flex w-svw'>
       
        <div className='flex w-80 justify-between'>
           <h1 className='text-2xl'>Workspace</h1>

        <button onClick={toggleSidebar} className='ml-4 cursor-pointer'>
          <SidebarIcon className='w-6 h-6' />
        </button>

        </div>

      </nav>

      <div className={`h-full bg-gray-100 transition-transform duration-300 ${sidebarCollapsed ? 'translate-x-[-100%]' : 'translate-x-0'} w-80`}>
        <div className='p-4'>
          <h2 className='text-xl font-bold'>Totally Skewed's Flowtion</h2>
          <ul className='mt-4 space-y-2'>
           <li className='flex'>
            <Home></Home>
            Home

           </li>

          </ul>
        </div>
    </div>





      </div>


  )
}

export default Sidebar