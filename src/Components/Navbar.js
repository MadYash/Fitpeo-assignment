import React, { useState } from 'react'
import Sidebar from './Sidebar'
const Navbar = () => {

  const [open,setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(!open)
  }
  return (
    <>
    
     {/* <!-- ======= Header ======= --> */}
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span class="d-none d-lg-block">Dashboard</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"
      // onClick={()=>document.getElementById('sidebar').className= "toggle-sidebar"}
      onClick={handleOpen}
      ></i>
    </div>
   

       <div className='d-flex justify-content-between'>
        <h2>Hello user</h2>
        <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div>
        </div>
    {/* <!-- End Search Bar --> */}

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search" 
            // onClick={()=>document.getElementById('sidebar').style={"display":"none"}}
            ></i>
          </a>
        </li>
        {/* <!-- End Search Icon--> */}
      </ul>
    </nav>
    {/* <!-- End Icons Navigation --> */}

  </header>
  {/* <!-- End Header --> */}
  {/* <!-- ======= Sidebar ======= --> */}
  <div id="sidebar">

<Sidebar open={open}/>
  </div>
    </>
  )
}

export default Navbar