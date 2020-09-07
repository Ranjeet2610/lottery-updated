import React, { Component } from 'react'

export default class createTicket extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    render() {
        return (
            <div>
            <div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h4 className="modal-title w-100">Create Ticket</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="container">
                    <h4 className="pt-3">Number</h4>
                    <form className="text-center">
                        <div className="form-group row mx-1">
                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">1</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">2</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">3</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">4</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">5</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">6</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">7</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">8</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">9</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>

                          <div className="col-xs-1 ml-2 my-2">
                            <a href="#" role="button" className="btn btn-primary btn-xs my-1">10</a>
                            <input className="form-control" id="ex1" type="text" size="1" />
                          </div>
                          
                        </div>
                      </form>
                </div>
              
                <div className="modal-body mx-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Total Amount</label>
                                    <input type="number" id="defaultForm-email" className="form-control validate" placeholder="Amount" />
                    
                                </div>
                            </div>
                    
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Draw no.</label>
                                    <input type="text" id="defaultForm-email" className="form-control validate" placeholder="draw no." />
                    
                                </div>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Agent Name</label>
                                    <input type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent Name" />
                    
                                </div>
                            </div>
                    
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Agent ID</label>
                                    <input type="text" id="defaultForm-email" className="form-control validate" placeholder="Agent ID" />
                    
                                </div>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Date & Time</label>
                                    <input type="datetime-local" id="defaultForm-email" className="form-control validate" placeholder="Date & Time" />
                                  
                                  </div>
                            </div>
                    
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">QR Code</label>
                                    <input type="text" id="defaultForm-email" className="form-control validate" placeholder="QR Code" />
                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
          
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-md btn-success">Submit</button>
                  <button type="reset" className="btn btn-md btn-secondary">Reset</button>
          
                </div>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
