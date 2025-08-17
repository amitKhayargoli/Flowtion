"use client";

import { SidebarIcon } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
      <div className={!sidebarCollapsed ? `w-64 h-screen bg-[#f8f8f7] p-4 border-r-2 border-gray-200`: `w-0 h-screen bg-white p-4`}>
        <div className='mb-4 block'>
        <h1 className='text-2xl font-bold'>
          Workspace
        </h1>

        <SidebarIcon className='cursor-pointer' onClick={()=>setSidebarCollapsed(false)}></SidebarIcon>
        </div>
        </div>


  )
}

export default Sidebar