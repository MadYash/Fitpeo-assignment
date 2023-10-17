import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <>
    
     {/* <!-- ======= Sidebar ======= --> */}
     <div className={props.open?'toggle-sidebar ':'sidebar '}>

  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="/">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      {/* <!-- End Dashboard Nav --> */}

      {/* <!-- End Components Nav --> */}

    
      {/* <!-- End Forms Nav --> */}

     
      {/* <!-- End Tables Nav --> */}

      {/* <!-- End Charts Nav --> */}

  
      {/* <!-- End Icons Nav --> */}

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="/">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </a>
      </li>
      {/* <!-- End Profile Page Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="/">
          <i class="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li>
      {/* <!-- End F.A.Q Page Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="/">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li>
      {/* <!-- End Contact Page Nav --> */}

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/register">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </Link>
      </li>
      {/* <!-- End Register Page Nav --> */}

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </Link>
      </li>
      {/* <!-- End Login Page Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-error-404">
          <i class="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li>
      {/* <!-- End Error 404 Page Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" href="/">
          <i class="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li>
      {/* <!-- End Blank Page Nav --> */}

    </ul>

  </aside>
  {/* <!-- End Sidebar--> */}
     </div>
    </>
  )
}

export default Sidebar