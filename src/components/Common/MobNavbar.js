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
                                        <i className="fas fa-users"/>
                                        Dashboard
                                    </Link>
                                </li>
                
        
                                <li>
                                    <Link onClick={() => {this.props.manageToggle("Manage_Lottery")}}>
                                        <i className="fas fa-ticket-alt"/>
                                        Manage Lottery
                                    </Link>
                                </li>
        
                                <li>
                                    <Link onClick={() => {this.props.manageToggle("Manage_Cricket")}}>
                                        <i className="fas fa-volleyball-ball"/>
                                        Manage Cricket
                                    </Link>
                                </li>
        
                            </ul>
                        </div>
                    </nav>
        )
    }
}
