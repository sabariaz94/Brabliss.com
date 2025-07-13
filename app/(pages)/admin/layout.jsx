import DashboardLayoutBranding from '@/components/SideBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
          <DashboardLayoutBranding/>
      {
        children
      }
    </div>
  )
}

export default layout
