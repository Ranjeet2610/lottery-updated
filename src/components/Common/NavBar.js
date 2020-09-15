import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/icon/logo.png'

export default class NavBar extends Component {
    render() {
        return (
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <img src={Logo} alt={<h2>ADMIN PANEL</h2>}/>
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
    
                            {
                                <li className="has-sub">
                                    <Link onClick={()=>{this.props.manageToggle("Admin")}}>
                                    <i className="fas fa-users"/>Dashboard</Link>
                                </li>
                            }
    
                            <li>
                                <Link onClick={() => {this.props.manageToggle("Manage_Lottery")}}>
                                    <i className="fas fa-ticket-alt"/>Manage Lottery</Link>
                            </li>
    
                            <li>
                                <Link onClick={() => {this.props.manageToggle("Manage_Cricket")}}>
                                    <i className="fas fa-cricket"/>Manage Cricket</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
