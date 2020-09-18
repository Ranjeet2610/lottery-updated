import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Assets/images/icon/logo.png'


export default class MobHeader extends Component {
    constructor(props){
    super(props);
    this.state = {
        display:'none',
        drop:''
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

    handleDrop = () => {
        if(this.state.drop==='')
        this.setState({
            drop:"none"
        })
        if(this.state.drop==='none')
        this.setState({
            drop:""
        })
    }

    handleLogout = () => {
        localStorage.removeItem("token");
        let token = localStorage.hasOwnProperty("token");
        if(!token){
            return window.location.href="/login"
        }
    }

    
    render() {
        return (
            <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <Link className="logo" >
                                <img src={Logo} alt={<h2>ADMIN PANEL</h2>} style={{width:'150px'}}/>
                                </Link>
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="content">
                                            <Link className="js-acc-btn " role="button" onClick={this.handleDrop}>
                                                john doe
                                                <i className="fas fa-angle-down ml-2"/>
                                            </Link>
                                        </div>
                                        <div className="account-dropdown js-dropdown" style={{"transform":this.state.drop}}>
                                            <ul style={{listStyle:'none'}}>
                                                <li className="account-dropdown__body">
                                                    <div className="account-dropdown__item">
                                                        <Link>
                                                            <i className="fas fa-lock"/>
                                                            Change Password
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="account-dropdown__footer">
                                                    <Link onClick={this.handleLogout}>
                                                        <i className="fas fa-sign-out-alt" />
                                                        Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <button className="hamburger hamburger--slider" type="button" onClick={this.handleNavbar}>
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="navbar-mobile" style={{"display" : this.state.display}}>
                        <div className="container-fluid">
                            <div className="navbar-mobile__list list-unstyled">
        
                    
                                <li className="has-sub">
                                    <Link className="js-arrow">
                                        <i className="fas fa-users"/>
                                        Agents List
                                    </Link>
                                </li>
                 

                                <li>
                                    <Link onClick={() => {this.props.manageToggle("Manage_Lottery")}}>
                                    <i className="fas fa-ticket-alt"></i>Manage Lottery</Link>
                                </li>
    
                                <li>
                                    <Link onClick={() => {this.props.manageToggle("Manage_Cricket")}}>
                                    <i className="fas fa-volleyball-ball"></i>Manage Cricket</Link>
                                </li>
        
                            </div>
                        </div>
                    </nav>
                </header>
        )
    }
}
