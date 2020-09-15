import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import {POST, GET} from '../../Services/Api'
import {Link} from 'react-router-dom'

export default class adminPage extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            Name:'',
            userName:'',
            Commission:'',
            Date:'',
            password:'',
            agentInfo:[],
            walletBalance:0,
            viewMore:'none',
            viewCommission:'none',
            id:'',
            userLock:'',
        }
    }

    getAgentList = () => {
        GET("getUsers", {headerStatus:true})
        .then(res=>{
            this.setState({
                agentInfo:res.data
            })
            return this.state.agentInfo
        })
        .catch(error=>{
            return error
        })
    }

    componentDidMount(){
        const Data = this.getAgentList();
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

    handleViewMore = (index) => {
        this.setState({
            id:index
        })
        if(this.state.viewMore === "none")
        {
            this.setState({
            viewMore:"block"
            })
        }
        else{
            this.setState({
                viewMore:"none"
                })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleLock = (userName) => {
        this.setState({
            userLock:userName
        })
    }

    
    handleBlock = () => {
        const obj = {
            userName:this.state.userLock
        }
        POST("lockUser",obj,{headerStatus:true})
        .then(res=>{
            const Data = this.getAgentList();
        })
        .catch(error=>{
            console.log(error)
        })
    }

    handleAddUser = () => {
        const obj = {
            Name : this.state.Name,
            userName: this.state.userName,
            Commission : this.state.Commission,
            Date:this.state.Date,
            password:this.state.password
        }
        POST("createAccount",obj,{headerStatus:true})
        .then(res => {
            const Data = this.getAgentList()
        .catch(error=>{
            console.log(error)
        })
        })
        .catch(error => {
            console.log(error);
        })
        this.handleClose();
    }

    handleChipDeposit = () => {
        console.log("object")
    }

    render() {
        let i=0;
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-admin btn-danger float-right mb-4">
                                    <i className="fa fa-trash mr-2"></i> 
                                    DELETE AGENT
                                </button>

                                <button className="btn btn-admin btn-dark float-right mb-4 mr-2" onClick={this.handleBlock}>
                                    <i className="fa fa-ban mr-2"/>
                                    BLOCK AGENT
                                </button>

                                <button className="btn btn-admin btn-success float-right mb-4 mr-2" onClick={this.handleShow}>
                                    <i className="fas fa-plus mr-2" />
                                    ADD AGENT
                                </button>

                                <div className="table-responsive m-b-30">
                                    <table className="table table-bordered table-striped table-earning table-hover">
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Agent ID</th>
                                                <th>Website</th>
                                                <th>commission</th>
                                                <th>Credit Limit</th>
                                                <th>View More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.agentInfo.map((ele,index) => {
                                                i+=1
                                                return (
                                                    <tr>
                                                        <td className="align-middle">{i}&nbsp;
                                                            <input type="checkbox" onClick={() => {this.handleLock(ele.userName)}}/>&nbsp;
                                                            {ele.blocked ? <i className="fas fa-ban text-danger" /> : null}
                                                        </td>
                                                        <td className="align-middle">{ele.userName}</td>
                                                        <td className="align-middle">{"Lottery"}</td>
                                                        <td className="align-middle">{ele.Commission}</td>
                                                        <td className="align-middle">{ele.walletBalance}</td>
                                                        <td className="align-middle">
                                                            <div className="dropdown">
                                                                <button 
                                                                    className="btn btn-primary btn-sm dropdown-toggle button-one" 
                                                                    type="button" 
                                                                    data-toggle="dropdown" 
                                                                    aria-haspopup="true" 
                                                                    aria-expanded="false"
                                                                    onClick={()=>{this.handleViewMore(index)}}
                                                                >
                                                                    View More
                                                                </button>
                                                                {this.state.id === index ?
                                                                <ul className="dropdown-menu" style={{display:this.state.viewMore}}>
                                                                    <li>
                                                                        <Link onClick={this.handleChipDeposit}>
                                                                            Free Chip Deposit
                                                                        </Link>
                                                                    </li>
                                                                    <li>

                                                                        <Link >
                                                                            Free Chip Withdrawal
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link >
                                                                            Ticket History
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                                :
                                                                null
                                                            }
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                        </table>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="copyright">
                                                    <p>Copyright © 2020. All rights reserved.</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{paddingLeft:'175px'}}><span style={{fontSize:'25px',fontFamily:'sans-serif'}}>Add Agent</span></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="modal-body mx-3">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Name</label>
                                        <input type="email" id="defaultForm-email" name="Name" onChange={this.handleChange} className="form-control validate" placeholder="name" />
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>User ID</label>
                                        <input onChange={this.handleChange} type="email" id="defaultForm-email" name="userName" className="form-control validate" placeholder="User ID" />           
                                    </div>
                                </div>
                            </div>
                                                    
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Commission</label>
                                        <input onChange={this.handleChange} type="email" id="defaultForm-email" name="Commission" className="form-control validate" placeholder="Commission" />           
                                    </div>
                                </div>
                    
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Date</label>
                                        <input onChange={this.handleChange} type="date" id="defaultForm-email" name="Date" className="form-control validate" placeholder="Date" />
                                    </div>
                                </div>
                                                
                            </div>     
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Password</label>
                                        <input onChange={this.handleChange} type="password" id="defaultForm-email" name="password" className="form-control validate" placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                        </div>                  
                    </Modal.Body>

                    <Modal.Footer style={{justifyContent:'center'}}>
                        <button className="btn btn-md btn-success" onClick={this.handleAddUser}>Add</button>
                        <button type="reset" className="btn btn-md btn-secondary">Reset</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
