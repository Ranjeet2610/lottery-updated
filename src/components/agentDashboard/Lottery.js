import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { POST, GET } from "../../Services/Api";

export default class Lottery extends Component {
    constructor(props){
        super(props);
        let rows = [], i = 0, len = 10;
        while (++i <= len) rows.push(true);

        this.state={
            show:false,
            arr:rows,
            one:0,
            two:0,
            three:0,
            four:0,
            five:0,
            six:0,
            seven:0,
            eight:0,
            nine:0,
            ten:0,
            agentName:'',
            agentID:'',
            lottery:this.props.lotteryTicketData
          }
    }

    handleShow = () => {
        this.setState({
            show:true
        })
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }

    handleButton = (e) =>{
        let id = e.target.name;
        const {arr } = this.state
        arr[id]=false
        this.setState({
            arr
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })   
    }

    handleSubmit = () => {
        let totalAmount=parseInt(this.state.one)+parseInt(this.state.two)+parseInt(this.state.three)+parseInt(this.state.four)+parseInt(this.state.five)+parseInt(this.state.six)+parseInt(this.state.seven)+parseInt(this.state.eight)+parseInt(this.state.nine)+parseInt(this.state.ten)
        const obj = {
            one:this.state.one,
            two:this.state.two,
            three:this.state.three,
            four:this.state.four,
            five:this.state.five,
            six:this.state.six,
            seven:this.state.seven,
            eight:this.state.eight,
            nine:this.state.nine,
            ten:this.state.ten,
            agentName:this.state.agentName,
            agentId:this.state.agentID,
            totalAmount:totalAmount
        }
        POST("generateTicket",obj,{headerStatus:true})
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        console.log("kgh",this.props)
        return (
            <div>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{paddingLeft:'155px'}}><span style={{fontSize:'25px',fontFamily:'sans-serif'}}>Create Ticket</span></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4 className="pt-3" style={{color:'black'}}>Numbers</h4>
                    
                    <div className="form-group row mx-1">
                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="0" style={{color :'white'}} onClick={this.handleButton} className="btn btn-primary btn-lg my-1 ml-3 focus">1</Link>
                            <input name="one" onChange={this.handleChange} disabled={this.state.arr[0]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="1" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">2</Link>
                            <input name="two" onChange={this.handleChange} disabled={this.state.arr[1]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="2" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">3</Link>
                            <input name="three" onChange={this.handleChange} disabled={this.state.arr[2]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link  name="3" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">4</Link>
                            <input name="four" onChange={this.handleChange} disabled={this.state.arr[3]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="4" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">5</Link>
                            <input name="five" onChange={this.handleChange} disabled={this.state.arr[4]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="5" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">6</Link>
                            <input name="six" onChange={this.handleChange} disabled={this.state.arr[5]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="6" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">7</Link>
                            <input name="seven" onChange={this.handleChange} disabled={this.state.arr[6]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="7" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">8</Link>
                            <input name="eight" onChange={this.handleChange} disabled={this.state.arr[7]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="8" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">9</Link>
                            <input name="nine" onChange={this.handleChange} disabled={this.state.arr[8]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="9" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-2 focus">10</Link>
                            <input name="ten" onChange={this.handleChange} disabled={this.state.arr[9]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>
                    </div>
                    
                    <div className="modal-body mx-3">
                        <div className="container">
                            <div className="row">
                                
                            {
                                // <div className="col-lg-6 col-sm-6 col-xs-6">
                                //     <div className="md-form mb-4">
                                //         <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Total Amount</label>
                                //         <input type="number" id="defaultForm-email" className="form-control validate" placeholder="Amount"/>
                        
                                //     </div>
                                // </div>
                            }

                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Agent Name</label>
                                        <input name="agentName" onChange={this.handleChange} type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent Name"/>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Agent ID</label>
                                        <input name="agentID" onChange={this.handleChange} type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent ID"/>
                                    </div>
                                </div>
                            </div>                  
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer  style={{justifyContent:'center'}}>
                    <button type="button" className="btn btn-md btn-success" onClick={this.handleSubmit}>Submit</button>
                    <button type="reset" className="btn btn-md btn-secondary">Reset</button>
                </Modal.Footer>
            </Modal>
                
                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <button className="btn btn-agent btn-primary float-right mb-4 mr-3" onClick={this.handleShow}>
                                        <i className="fas fa-plus"></i>  CREATE A TICKET
                                    </button>
                                    
                                    <div className="table-responsive table--no-card m-b-30">
                                        <table className="table table-bordered table-striped table-earning">
                                            <thead>
                                                <tr className="text-center">
                                                    <th>S.No.</th>
                                                    <th>number</th>
                                                    <th>ticket amount</th>
                                                    <th>draw number</th>
                                                    <th>date & time</th>
                                                    <th>print</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="align-middle">1 <input type="checkbox"/>
                                                </td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100398</td>
                                                <td className="align-middle">iPhone X</td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">
                                                    <div>
                                                        <a className="btn btn-success mr-1" href="#" role="button" style={{width: "100px"}}>print</a> 
                                                        <a className="btn btn-primary btn-one ml-1" href="#" role="button" style={{width: "100px"}}>share</a>
                                                    </div>
                                                </td>
                                            </tr>
                                                
                                            <tr>
                                                <td className="align-middle">2 <input type="checkbox"/></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100398</td>
                                                <td className="align-middle">iPhone X</td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">
                                                    <div>
                                                        <a className="btn btn-success mr-1" href="#" role="button" style={{width: "100px"}}>print</a>
                                                        <a className="btn btn-primary btn-one ml-1" href="#" role="button" style={{width: "100px"}}>share</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>                            
                        </div>                                
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
        )
    }
}
