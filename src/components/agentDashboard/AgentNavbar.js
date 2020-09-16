import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AgentNavbar extends Component {
    render() {
        return (
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <h2 style={{fontFamily:'Times New Roman',fontWeight:'bold',}}>AGENT PANEL</h2>
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
                            <li className="has-sub">
                                <Link onClick={() => {this.props.manageToggle("lottery")}}>
                                <i className="fas fa-ticket-alt"></i>Lottery</Link>
                            </li>

                            <li>
                                <Link onClick={() => {this.props.manageToggle("cricket")}}>
                                <i className="fas fa-volleyball-ball"></i>Cricket</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
