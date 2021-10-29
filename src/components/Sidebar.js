import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
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
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Username
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {" "}
                <li className="nav-item">
                  <Link to="dashboard" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      {/* <i className="right fas fa-angle-left" /> */}
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="dashboard" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                      Misc
                      {/* <span className="right badge badge-danger">New</span> */}
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="students" className="nav-link">
                    <i className="nav-icon fas fa-user-graduate" />
                    <p>Students</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-shopping-bag" />
                    <p>
                      Shopping
                      <i className="fas fa-angle-left right" />
                      <span className="badge badge-info right">6</span>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/layout/top-nav.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>4</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>5</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>6</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-shopping-bag" />
                    <p>Store</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-university" />
                    <p>
                      Institute
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Institute 1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Institute 2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Institute 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-question-circle" />
                    <p>
                      Manage Questions
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/UI/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Q1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/icons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Q2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/buttons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Q3</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/sliders.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Q4</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/modals.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Q5</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/navbar.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Q6</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                      Manage Test
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/forms/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Test 1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/advanced.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Test 2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/editors.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Test 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-play-circle" />
                    <p>
                      Manage Videos
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/tables/simple.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Video 1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/tables/data.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Video 2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/tables/jsgrid.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Video 3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-video" />
                    <p>Manage Live Videos</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-file-pdf" />
                    <p>Manage PDFs</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fab fa-pagelines" />
                    <p>Manage Packages</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-cog" />
                    <p>Settings</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon fas fa-cog" />
                    <p>App Banner</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
