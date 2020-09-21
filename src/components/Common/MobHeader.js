import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Modal} from 'react-bootstrap'
import { POST } from '../../Services/Api';


export default class MobHeader extends Component {
    constructor(props){
    super(props);
    this.state = {
        display:'none',
        drop:'',
        show:false,
        userName:'',
        oldPassword:'',
        newPassword:'',
        confirmPassword:'',
        userType:''
    }
}

    async componentDidMount(){
        let user = JSON.parse(localStorage.getItem("user"))
        await this.setState({
            userName:user.data.userName,
            userType:user.data.userType
        })
    }

    handleNavbar = (parameter) => {
        if(parameter==="Navbar"){
            if(this.state.display==='none')
                this.setState({
                display:'block'
            })
            if(this.state.display==='block')
                this.setState({
                display:'none'
            })
        }
        if(parameter==='Admin'){
            this.props.manageToggle("Admin")
            this.setState({
            display:'none'
            })
        }
        if(parameter==='Manage_Lottery'){
            this.props.manageToggle("Manage_Lottery")
            this.setState({
            display:'none'
            })
        }
        if(parameter==='Manage_Cricket'){
            this.props.manageToggle("Manage_Cricket")
            this.setState({
            display:'none'
            })
        }
        if(parameter==='lottery'){
            this.props.manageToggle("lottery")
            this.setState({
            display:'none'
            })
        }
        if(parameter==='cricket'){
            this.props.manageToggle("cricket")
            this.setState({
            display:'none'
            })
        }
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

    handleShow = () => {
        this.setState({
            show:true,
        })
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }

    handleChangePassword = () => {        
        const obj = {
            userName:this.state.userName,
            oldPassword:this.state.oldPassword,
            newPassword:this.state.newPassword,
            }
        POST("changePasswordByUser",obj,{headerStatus:true})
        .then(res=>{
            console.log("changePassword",res)
        })
        .catch(error=>{
            console.log(error)
        })
        this.handleClose();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <Link className="border pt-2" >
                                <h5 style={{fontFamily:'Times New Roman',fontWeight:'bold', color:'#666'}}>ADMIN PANEL</h5>
                                </Link>
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="content border ml-2">
                                            <Link className="js-acc-btn " role="button" onClick={this.handleDrop}>
                                            {this.state.userName}
                                                <i className="fas fa-angle-down ml-2"/>
                                            </Link>
                                        </div>
                                        <div className="account-dropdown js-dropdown" style={{"transform":this.state.drop}}>
                                            <ul style={{listStyle:'none'}}>
                                                <li className="account-dropdown__body">
                                                    <div className="account-dropdown__item">
                                                        <Link onClick={this.handleShow}>
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
                                <button className="hamburger hamburger--slider" type="button" onClick={()=>this.handleNavbar('Navbar')}>
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {
                        // Modal for Change Password
                    }

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header  style={{justifyContent:'center'}} closeButton>
                            <Modal.Title>Change Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="container">
                            <div className="">
                                <label style={{color:'black'}}>
                                    Old Password:
                                </label>
                                <input onChange={this.handleChange} name="oldPassword" type="text" className="form-control" placeholder="Old Password" /> 
                            </div>
                            <div className="my-3">
                                <label style={{color:'black'}}>
                                    New Password:
                                </label>
                                <input onChange={this.handleChange} name="newPassword" type="text" className="form-control" placeholder="New Password" /> 
                            </div>
                            <div className="">
                                <label style={{color:'black'}}>
                                    Confirm Password:
                                </label>
                                <input onChange={this.handleChange} name="confirmPassword" type="text" className="form-control" placeholder="Confirm Password" /> 
                            </div>
                        </div>
                    </Modal.Body>
                        <Modal.Footer style={{justifyContent:'center'}}>
                            <button className="btn btn-success" onClick={this.handleChangePassword}>Update</button>
                        </Modal.Footer>
                </Modal>

                    {
                        // Navbar block
                    }
                    
                        <nav className="navbar-mobile" style={{"display" : this.state.display}}>
                            <div className="container-fluid">
                            {
                                (this.state.userType===1) ?
                                <div className="navbar-mobile__list list-unstyled">
            
                                    <li className="has-sub">
                                        <Link onClick={() => {this.handleNavbar("Admin")}}>
                                        <i className="fas fa-chalkboard-teacher"/><span className="mobNav">Dashboard</span></Link>
                                    </li>
                    
                                    <li>
                                        <Link onClick={() => {this.handleNavbar("Manage_Lottery")}}>
                                        <i className="fas fa-ticket-alt"/><span className="mobNav">Manage Lottery</span></Link>
                                    </li>
        
                                    <li>
                                        <Link onClick={() => {this.handleNavbar("Manage_Cricket")}}>
                                        <i className="fas fa-volleyball-ball"/><span className="mobNav">Manage Cricket</span></Link>
                                    </li>
            
                                </div>
                                :
                                <div className="navbar-mobile__list list-unstyled">
            
                                    <li>
                                        <Link onClick={() => {this.handleNavbar("lottery")}}>
                                        <i className="fas fa-ticket-alt"/><span className="mobNav">Lottery</span></Link>
                                    </li>
        
                                    <li>
                                        <Link onClick={() => {this.handleNavbar("cricket")}}>
                                        <i className="fas fa-volleyball-ball"/><span className="mobNav">Cricket</span></Link>
                                    </li>
            
                                </div>
                            }
                            </div>
                        </nav>
                   
                </header>
        )
    }
}
