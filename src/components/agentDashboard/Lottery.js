import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'


export default class Lottery extends Component {
    constructor(props){
        super(props);
        let rows = [], i = 0, len = 10;
        while (++i <= len) rows.push(true);

        this.state={
            show:false,
            arr:rows
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

    render() {
        return (
            <div>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{paddingLeft:'155px'}}><span style={{fontSize:'25px',fontFamily:'sans-serif'}}>Create Ticket</span></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h4 className="pt-3" style={{color:'black'}}>Number</h4>
                    <form>
                    <div className="form-group row mx-1">
                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="0" style={{color :'white'}} onClick={this.handleButton} className="btn btn-primary btn-lg my-1 ml-3 focus">1</Link>
                            <input disabled={this.state.arr[0]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="1" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">2</Link>
                            <input disabled={this.state.arr[1]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="2" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">3</Link>
                            <input disabled={this.state.arr[2]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link  name="3" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">4</Link>
                            <input disabled={this.state.arr[3]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="4" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">5</Link>
                            <input disabled={this.state.arr[4]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="5" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">6</Link>
                            <input disabled={this.state.arr[5]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="6" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">7</Link>
                            <input disabled={this.state.arr[6]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="7" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">8</Link>
                            <input disabled={this.state.arr[7]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link name="8" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-3 focus">9</Link>
                            <input disabled={this.state.arr[8]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>

                        <div className="col-xs-1 ml-2 my-2">
                            <Link  name="9" role="button" onClick={this.handleButton} style={{color:'white'}} className="btn btn-primary btn-lg my-1 ml-2 focus">10</Link>
                            <input disabled={this.state.arr[9]} className="form-control" id="ex1" type="text" size="2"/>
                        </div>
                    </div>
                    </form>
                    <div className="modal-body mx-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Total Amount</label>
                                        <input type="number" id="defaultForm-email" className="form-control validate" placeholder="Amount"/>
                        
                                    </div>
                                </div>
                        
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Draw no.</label>
                                        <input type="text" id="defaultForm-email" className="form-control validate" placeholder="draw no."/>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Agent Name</label>
                                        <input type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent Name"/>
                        
                                    </div>
                                </div>
                        
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Agent ID</label>
                                        <input type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent ID"/>
                        
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>Date & Time</label>
                                        <input type="datetime-local" id="defaultForm-email" className="form-control validate" placeholder="Date & Time"/>
                                      
                                      </div>
                                </div>
                        
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email" style={{color:'black'}}>QR Code</label>
                                        <input type="text" id="defaultForm-email" className="form-control validate" placeholder="QR Code"/>
                        
                                    </div>
                                </div>
                            </div>
                        
                        </div>
              
                    </div>
                </Modal.Body>

                <Modal.Footer  style={{justifyContent:'center'}}>
                    <button type="submit" className="btn btn-md btn-success">Submit</button>
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
            
                {
                    // <div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            //     aria-hidden="true">
            //     <div className="modal-dialog" role="document">
            //       <div className="modal-content">
            //       <div className="modal-header text-center">
            //           <h4 className="modal-title w-100">Create Ticket</h4>
            //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            //           <span aria-hidden="true">&times;</span>
            //           </button>
            //         </div>

            //         <div className="container">
            //             <h4 className="pt-3">Number</h4>
            //             <form className="text-center">
            //             <div className="form-group row mx-1">
            //             <div className="col-xs-1 ml-2 my-2">
            //             <a href="#" role="button" className="btn btn-primary btn-xs my-1">1</a>
            //             <input className="form-control" id="ex1" type="text" size="1"/>
            //             </div>
                        
            //             <div className="col-xs-1 ml-2 my-2">
            //             <a href="#" role="button" className="btn btn-primary btn-xs my-1">2</a>
            //             <input className="form-control" id="ex1" type="text" size="1"/>
            //             </div>

            //             <div className="col-xs-1 ml-2 my-2">
            //                     <a href="#" role="button" className="btn btn-primary btn-xs my-1">3</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                   </div>
                              
            //                   <div className="col-xs-1 ml-2 my-2">
            //                   <a href="#" role="button" className="btn btn-primary btn-xs my-1">4</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                     </div>

            //                   <div className="col-xs-1 ml-2 my-2">
            //                   <a href="#" role="button" className="btn btn-primary btn-xs my-1">5</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                     </div>
                                
            //                   <div className="col-xs-1 ml-2 my-2">
            //                   <a href="#" role="button" className="btn btn-primary btn-xs my-1">6</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                     </div>

            //                     <div className="col-xs-1 ml-2 my-2">
            //                     <a href="#" role="button" className="btn btn-primary btn-xs my-1">7</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                     </div>

            //                     <div className="col-xs-1 ml-2 my-2">
            //                     <a href="#" role="button" className="btn btn-primary btn-xs my-1">8</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                   </div>
                              
            //                   <div className="col-xs-1 ml-2 my-2">
            //                   <a href="#" role="button" className="btn btn-primary btn-xs my-1">9</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                     </div>

            //                     <div className="col-xs-1 ml-2 my-2">
            //                     <a href="#" role="button" className="btn btn-primary btn-xs my-1">10</a>
            //                     <input className="form-control" id="ex1" type="text" size="1"/>
            //                   </div>
                              
            //                 </div>
            //                 </form>
            //                 </div>
                            
            //         <div className="modal-body mx-3">
            //         <div className="container">
            //                 <div className="row">
            //                 <div className="col-lg-6 col-sm-6 col-xs-6">
            //                         <div className="md-form mb-4">
            //                         <label data-error="wrong" data-success="right" for="defaultForm-email">Total Amount</label>
            //                             <input type="number" id="defaultForm-email" className="form-control validate" placeholder="Amount"/>
                                        
            //                         </div>
            //                         </div>
                                    
            //                     <div className="col-lg-6 col-sm-6 col-xs-6">
            //                     <div className="md-form mb-4">
            //                             <label data-error="wrong" data-success="right" for="defaultForm-email">Draw no.</label>
            //                             <input type="text" id="defaultForm-email" className="form-control validate" placeholder="draw no."/>
                        
            //                         </div>
            //                     </div>
            //                     </div>
                        
            //                     <div className="row">
            //                     <div className="col-lg-6 col-sm-6 col-xs-6">
            //                         <div className="md-form mb-4">
            //                         <label data-error="wrong" data-success="right" for="defaultForm-email">Agent Name</label>
            //                             <input type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent Name"/>
                        
            //                         </div>
            //                         </div>
                        
            //                         <div className="col-lg-6 col-sm-6 col-xs-6">
            //                         <div className="md-form mb-4">
            //                         <label data-error="wrong" data-success="right" for="defaultForm-email">Agent ID</label>
            //                         <input type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent ID"/>
                        
            //                         </div>
            //                     </div>
            //                     </div>
                        
            //                     <div className="row">
            //                     <div className="col-lg-6 col-sm-6 col-xs-6">
            //                     <div className="md-form mb-4">
            //                     <label data-error="wrong" data-success="right" for="defaultForm-email">Date & Time</label>
            //                     <input type="datetime-local" id="defaultForm-email" className="form-control validate" placeholder="Date & Time"/>
                                
            //                     </div>
            //                     </div>
                        
            //                     <div className="col-lg-6 col-sm-6 col-xs-6">
            //                     <div className="md-form mb-4">
            //                     <label data-error="wrong" data-success="right" for="defaultForm-email">QR Code</label>
            //                     <input type="text" id="defaultForm-email" className="form-control validate" placeholder="QR Code"/>
                                
            //                         </div>
            //                         </div>
            //                 </div>
                        
            //                 </div>
                            
            //                 </div>
                        
            //                 <div className="modal-footer d-flex justify-content-center">
            //           <button type="submit" className="btn btn-md btn-success">Submit</button>
            //           <button type="reset" className="btn btn-md btn-secondary">Reset</button>
              
            //         </div>
            //       </div>
            //     </div>
            //   </div>
        }
        </div>
        )
    }
}
