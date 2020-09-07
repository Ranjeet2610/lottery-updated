import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/icon/logo.png'

export default class NavBar extends Component {
    render() {
        return (
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                <img src={Logo} alt={<h2>ADMIN PANEL</h2>}/>
                    {//<h2>ADMIN PANEL</h2>
                    }
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
    
                            {
                                // <li className="has-sub">
                                // <a className="js-arrow" href="admin.html">
                                //     <i className="fas fa-users"></i>Agents List</a>
                                
                                //     <ul className="list-unstyled navbar__sub-list js-sub-list">
                                //     <!-- <li>
                                //         <a href="#">Agents</a>
                                //     </li> -->
                                //     <!-- <li>
                                //         <a href="#">Users</a>
                                //     </li> -->
    
                                // </ul>
                                // </li>
                            }
    
                            <li>
                                <Link onClick={() => {this.props.manageToggle("Manage_Lottery")}}>
                                    <i className="fas fa-ticket-alt"></i>Manage Lottery</Link>
                            </li>
    
                            <li>
                                <Link onClick={() => {this.props.manageToggle("Manage_Cricket")}}>
                                    <i className="fas fa-volleyball-ball"></i>Manage Cricket</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
