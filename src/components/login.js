import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            rememberMe:'',
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email,this.state.password,this.state.rememberMe)
    }

    render() {
        return (
            <div >
                <div className="animsition">
                    <div className="page-wrapper">
                        <div className="page-content--bge5 login_Bg">
                            <div className="container">
                                <div className="login-wrap">
                                    <div className="login-content">
                                        <div className="login-logo">
                                            <h2>Login</h2>
                                        </div>
                                        <div className="login-form">
                                            <form>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" name="email" onChange={this.handleOnChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                                </div>
                
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" onChange={this.handleOnChange} required className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                
                                                <div className="form-check pt-3">
                                                    <input type="checkbox" name="rememberMe" onChange={this.handleOnChange} required className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Remember Me </label>
                                                    <label>
                                                        <Link to="/forgetpassword" className="text-danger" style={{paddingLeft: '10rem'}}>Forgot Password?</Link>
                                                    </label>
                                                </div>
                
                                                <button type="button" onClick={this.handleOnSubmit} className="btn btn-primary btn-smt-2">sign in</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
