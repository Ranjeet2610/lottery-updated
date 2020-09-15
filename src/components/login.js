import React, { Component } from 'react'
import {POST} from '../Services/Api'

export default class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            rememberMe:'',
            loggedIn:'',
            errorMsg:'',
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const obj = {
            userName:this.state.email,
            password:this.state.password
        }
        POST("login",obj)
        .then(res=>{
            console.log(res)
            if (res.data.success) {  
                this.setState({
                    loggedIn:res.data.token
                })
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data));
                let token = localStorage.getItem("token");
                if(token){
                    return this.props.history.push("/admin")
                }       
            }
            else{
                this.setState({
                    loggedIn:res.data.message
                })
                // console.log(this.state.loggedIn)

            }   
        })
        .catch(error=>{
            alert("login",error);   
        })
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
                                                    <input type="text" name="email" onChange={this.handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                                </div>
                
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" onChange={this.handleOnChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                
                                                <div className="form-check pt-3">
                                                    <input type="checkbox" name="rememberMe" onChange={this.handleOnChange} className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Remember Me </label>
                                                </div>
                                                <div className="form-check" style={{color:'red'}}>
                                                    {this.state.loggedIn}
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
