import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Dashboard</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                        <div className="inner">
                            <h3>0</h3>
                            <p>Total Tests Attempted</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                        <div className="inner">
                            <h3>%</h3>
                            <p>Average Score</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    
                    
                    </div>
                    
                </div>
                </section>
                <section>
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                    <button type="button" className="btn btn-outline-secondary">Action</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    </div>

                </section>
                
            </div>
</div>

        )
    }
}
