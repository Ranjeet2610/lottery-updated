import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class MobHeader extends Component {
    constructor(props){
    super(props);
    this.state = {
        display:'none'
    }
}

    handleNavbar = () => {
        if(this.state.display==='none')
        this.setState({
            display:'block'
        })
        if(this.state.display==='block')
        this.setState({
            display:'none'
        })
    }

    
    render() {
        return (
            <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <Link className="logo" href="dashboard.html">
                                    <h2 className="lead mt-3">ADMIN PANEL</h2>
                                </Link>
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="content">
                                            <Link className="js-acc-btn mt-3" href="#">john doe</Link>
                                        </div>
                                        <div className="account-dropdown js-dropdown">
                                            <div className="info clearfix">
                                                <div className="content">
                                                    <h5 className="name">
                                                        <Link href="#">john doe</Link>
                                                    </h5>
                                                    <span className="email">johndoe@example.com</span>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__body">
                                                <div className="account-dropdown__item">
                                                    <Link href="#">
                                                        <i className="zmdi zmdi-account"></i>Account</Link>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <Link href="#">
                                                        <i className="zmdi zmdi-settings"></i>Setting</Link>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <Link href="#">
                                                        <i className="zmdi zmdi-money-box"></i>Billing</Link>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__footer">
                                                <Link href="#">
                                                    <i className="zmdi zmdi-power"></i>Logout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="hamburger hamburger--slider mt-3" type="button" onClick={this.handleNavbar}>
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="navbar-mobile" style={{"display" : this.state.display}}>
                        <div className="container-fluid">
                            <ul className="navbar-mobile__list list-unstyled">
        
                            {
                                // <li className="has-sub">
                                //     <Link className="js-arrow">
                                //         <i className="fas fa-users"></i>Agents List</Link>
                                    //     <ul className="list-unstyled navbar__sub-list js-sub-list">
                                    //     <!-- <li>
                                    //         <Link href="#">Agents</Link>
                                    //     </li> -->
                                    //     <!-- <li>
                                    //         <Link href="#">Users</Link>
                                    //     </li> -->
        
                                    // </ul>
                                    // </li>
                                }
        
                                <li>
                                    <Link>
                                        <i className="fas fa-ticket-alt"></i>Manage Lottery</Link>
                                </li>
        
                                <li>
                                    <Link>
                                        <i className="fas fa-volleyball-ball"></i>Manage Cricket</Link>
                                </li>
        
                            </ul>
                        </div>
                    </nav>
                </header>
 
        )
    }
}
