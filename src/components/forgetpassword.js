import React, { Component } from 'react'

export default class forgetpassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleOnSubmit = () =>{
        console.log(this.state.email)
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
                                            <h3>Forgot Password?</h3>
                                        </div>

                                        <div className="login-form">
                                            <form onSubmit={this.handleOnSubmit}>
                                                <div className="form-group">
                                                    <label for="email1" className="lead">Email address</label>
                                                    <input type="email" name="email" onChange={this.handleChange} className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />
                                                </div>
                                            
                                                <button type="submit" className="btn btn-primary btn-smt lead">Submit</button>
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
