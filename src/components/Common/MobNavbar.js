import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MobNavbar extends Component {
    render() {
        return (
            <nav className="navbar-mobile">
                        <div className="container-fluid">
                            <ul className="navbar-mobile__list list-unstyled">
        
                                <li className="has-sub">
                                    <Link className="js-arrow">
                                        <i className="fas fa-users"></i>Agents List</Link>
                                    {
                                    //     <ul className="list-unstyled navbar__sub-list js-sub-list">
                                    //     <!-- <li>
                                    //         <Link >Agents</Link>
                                    //     </li> -->
                                    //     <!-- <li>
                                    //         <Link >Users</Link>
                                    //     </li> -->
        
                                    // </ul>
                                }
                                </li>
        
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
        )
    }
}
