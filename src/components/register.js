import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            checkbox:'',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleOnSubmit = () => {
        console.log(this.state.username, this.state.email, this.state.checkbox)
    }


    render() {
        return (
            <div>
                <div className="animsition">
                    <div className="page-wrapper">
                        <div className="page-content--bge5 login_Bg">
                            <div className="container">
                                <div className="login-wrap">
                                    <div className="login-content">
                                        <div className="login-logo">
                                            <h2>Register</h2>
                                        </div>
                                        <div className="login-form">
                
                                            <form onSubmit={this.handleOnSubmit}>
                                                <div className="form-group">
                                                    <label for="username">Username</label>
                                                    <input type="username" required name="username" onChange={this.handleChange} className="form-control" id="username1" aria-describedby="emailHelp" placeholder="Username" />
                                                </div>
                
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" required name="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                                </div>
                
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" required name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                
                                                <div className="form-check">
                                                    <input type="checkbox" required name="checkbox" onChange={this.handleChange} className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Agree the terms and policy</label>
                                                </div>
                
                                                <button type="submit" className="btn btn-primary btn-smt-3">register</button>
                                            </form>
                
                                            <div className="register-link">
                                                <p>
                                                    Already have account?<Link to="/login">Sign In</Link>
                                                </p>
                                            </div>
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
