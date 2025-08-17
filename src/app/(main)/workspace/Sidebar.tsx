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
  
      <nav className='px-4 py-2 bg-[#f9f8f7] flex w-svw border-b border-[#e0dfde] items-center justify-between'>
       
        <div className='flex w-80 justify-between'>
           <h1 className='text-2xl'>Workspace</h1>

        <button onClick={toggleSidebar} className='ml-4 cursor-pointer'>
          <SidebarIcon className='w-6 h-6' />
        </button>

        </div>

      </nav>

      <div className={`h-full bg-[#f9f8f7] transition-transform duration-300 ${sidebarCollapsed ? 'translate-x-[-100%]' : 'translate-x-0'} w-80`}>
        <div className='p-4'>
          <h2 className='text-xl font-bold'>Totally Skewed's Flowtion</h2>
          <ul className='mt-4 space-y-2'>
           <li className='flex hover:bg-[#f1f0ef]'>
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