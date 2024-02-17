import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="container-fluid main">
<div className="container">
<Outlet/>
</div>
</div>
  )
}

export default Layout