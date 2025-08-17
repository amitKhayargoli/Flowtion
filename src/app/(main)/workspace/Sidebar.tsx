import { SidebarIcon } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);


  return (
      <div className={sidebarCollapsed ? `w-64 h-full bg-white p-4`: `w-0 h-full bg-white p-4`}>
        <span className='mb-4'>
        <h1 className='text-2xl font-bold'>
          Workspace
        </h1>

        <SidebarIcon onClick={()=>setSidebarCollapsed(false)}></SidebarIcon>

        </span>
        </div>


  )
}

export default Sidebar