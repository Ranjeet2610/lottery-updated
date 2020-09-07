import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class WebHeader extends Component {
    render() {
        return (
            <header className="header-desktop">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="header-wrap">

                        <div className="header-button">

                            <div className="account-wrap">
                                <div className="account-item clearfix js-item-menu">

                                    <div className="content">
                                        <Link className="js-acc-btn">john doe</Link>
                                        <i className="fas fa-angle-down ml-2"></i>
                                    </div>
                                    <div className="account-dropdown js-dropdown">
                                        <div className="info clearfix">

                                            <div className="content">
                                                <h5 className="name">
                                                    <Link>john doe</Link>
                                                </h5>
                                                <span className="email">johndoe@example.com</span>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__body">
                                            <div className="account-dropdown__item">
                                                <Link>
                                                    <i className="zmdi zmdi-account"></i>Account</Link>
                                            </div>
                                            <div className="account-dropdown__item">
                                                <Link>
                                                    <i className="zmdi zmdi-settings"></i>Setting</Link>
                                            </div>
                                            <div className="account-dropdown__item">
                                                <Link>
                                                    <i className="zmdi zmdi-money-box"></i>Billing</Link>
                                            </div>
                                        </div>
                                        <div className="account-dropdown__footer">
                                            <Link>
                                                <i className="zmdi zmdi-power"></i>Logout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        )
    }
}
