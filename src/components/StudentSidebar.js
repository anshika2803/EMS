import React, { Component } from 'react'

export default class StudentSidebar extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      {/* <img src="" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
      <span className="brand-text text-center">Ravionics</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Username</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
               
              </p>
            </a>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-file-alt" />
              <p>
                My Tests
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-poll" />
              <p>
                My Results
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-envelope" />
              <p>
                Message
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-folder" />
              <p>
                Documents
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-newspaper" />
              <p>
                News & Updates
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-question" />
              <p>
                Bookmarked Questions
              </p>
            </a>
          </li>
         
          <li className="nav-item">
            <a href="pages/calendar.html" className="nav-link">
              <i className="nav-icon fas fa-cog" />
              <p>
                Settings                
              </p>
            </a>
          </li>
          
        
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
