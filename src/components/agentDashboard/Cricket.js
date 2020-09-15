import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

export default class cricket extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            name:'',
        }
    }

    handleShow = (naam) => {
        if(naam==="Khayi"){
            this.setState({
                show:true,
                name:"Khayi"
            })
        }
        else{
            this.setState({
                show:true,
                name:"Lagayi"
            })
        }
    }

    handleClose = () => {
        this.setState({
            show:false
        })
    }

    render() {
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">

                                <button className="btn au-btn btn-primary float-right mb-4" onClick={()=>this.handleShow("Khayi")}>
                                    <i className="fa fa-plus mr-2"></i>Khayi</button>

                                <button className="btn au-btn btn-primary float-right mb-4 mr-4" onClick={()=>this.handleShow("Lagayi")}>
                                    <i className="fa fa-plus mr-2"></i>Lagayi</button>

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
                                                <td className="align-middle">
                                                    <span>1</span>&nbsp;
                                                    <input type="checkbox"/>
                                                </td>
                                                <td className="align-middle">2018-09-29 05:57</td>
                                                <td className="align-middle">100398</td>
                                                <td className="align-middle">iPhone X 64Gb Grey</td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="text-right">
                                                    <div>
                                                        <Link className="btn btn-success" role="button"
                                                            style={{width: "100px"}}>print</Link>
                                                        <Link className="btn btn-primary btn-one" role="button"
                                                            style={{width: "100px"}}>share</Link>
                                                    </div>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td className="align-middle">
                                                    <span>2</span>&nbsp;
                                                    <input type="checkbox" />
                                                </td>
                                                <td className="align-middle">2018-09-29 05:57</td>
                                                <td className="align-middle">100398</td>
                                                <td className="align-middle">iPhone X 64Gb Grey</td>
                                                <td className="align-middle">2018-09-29 05:57</td>
                                                <td className="text-right">
                                                    <div>
                                                        <Link className="btn btn-success" role="button"
                                                            style={{width: "100px"}}>print</Link>
                                                        <Link className="btn btn-primary btn-one" role="button"
                                                            style={{width: "100px"}}>share</Link>
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
                                    
        {
            //<!-- Modal-two 
        }
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton  >
                        <Modal.Title style={{paddingLeft:'187px'}}><span style={{fontSize:'25px',fontFamily:'sans-serif'}}>{this.state.name}</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                            <div class="modal-body mx-3">
                                
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-xs-6">
                                            <div class="md-form mb-4">
                                                <label data-error="wrong" data-success="right" for="defaultForm-email">Number</label>
                                                <input type="number" id="defaultForm-email" class="form-control validate" placeholder="number"/>  
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-sm-6 col-xs-6">
                                            <div class="md-form mb-4">
                                                <label data-error="wrong" data-success="right" for="defaultForm-email">Amount</label>
                                                <input type="text" id="defaultForm-email" class="form-control validate" placeholder="Amount"/>                    
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-xs-6">
                                            <div class="md-form mb-4">
                                                <label data-error="wrong" data-success="right" for="defaultForm-email">bet no.</label>
                                                <input type="number" id="defaultForm-email" class="form-control validate" placeholder="Bet no."/>
                                                
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-sm-6 col-xs-6">
                                            <div class="md-form mb-4">
                                                <label data-error="wrong" data-success="right" for="defaultForm-email">Date & Time</label>
                                                <input type="datetime" id="defaultForm-email" class="form-control validate" placeholder="Date & Time"/>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-xs-6">
                                            <div class="md-form mb-4">
                                                <label data-error="wrong" data-success="right" for="defaultForm-email">QR code</label>
                                                <input type="text" id="defaultForm-email" class="form-control validate" placeholder="QR code"/>                
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-sm-6 col-xs-6"></div>
                                    </div>
                                
                            </div>
                    
                    </Modal.Body>
                    <Modal.Footer style={{justifyContent:'center'}}>
                        <button type="submit" class="btn btn-md btn-success">Submit</button>
                        <button type="reset" class="btn btn-md btn-secondary">Reset</button>
                    </Modal.Footer>
                </Modal>
              
            </div>
        )
    }
}
