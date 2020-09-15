import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { POST } from '../../Services/Api';

export default class WebHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            drop:'',
            userName:'',
            show:false,
            oldPassword:'',
            newPassword:'',
            confirmPassword:'',
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

    componentDidMount(){
        let user = JSON.parse(localStorage.getItem("user"))
        this.setState({
            userName:user.data.userName
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangePassword = () => {
        // debugger         
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

    render() {
        return (
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">

                            <div className="header-button">

                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="content" >
                                            <Link className="js-acc-btn" onClick={this.handleDrop}>
                                                {this.state.userName}
                                                <i className="fas fa-angle-down ml-2"></i>
                                            </Link>
                                        </div>
                                        <div className="account-dropdown js-dropdown" style={{"transform":this.state.drop}}>                                       
                                            <div className="account-dropdown__item">
                                                <Link onClick={this.handleShow}>
                                                    <i className="fas fa-lock" />
                                                    Change Password
                                                </Link>
                                            </div>
                                            
                                            <div className="account-dropdown__footer">
                                                <Link onClick={this.handleLogout}>
                                                    <i className="fas fa-sign-out-alt" />
                                                    Logout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

            </header>
        )
    }
}
