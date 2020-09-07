import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Lottery extends Component {
    render() {
        return (
            <div>
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">

                                <button class="btn btn-lg btn-primary float-right mb-4 mr-3"
                                data-toggle="modal" data-target="#modalLoginForm">
                                    <i class="zmdi zmdi-plus"></i>  CREATE A tICKET</button>

                                <div class="table-responsive table--no-card m-b-30">
                                    <table class="table table-bordered table-striped table-earning">
                                        <thead>
                                            <tr class="text-center">
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
                                                <td class="align-middle">1 
                                                <input type="checkbox"/>
                                                </td>
                                                <td class="align-middle">2018-09</td>
                                                <td class="align-middle">100398</td>
                                                <td class="align-middle">iPhone X</td>
                                                <td class="align-middle">2018-09</td>
                                                <td class="align-middle">
                                                    <div>
                                                        <a class="btn btn-success" href="#" role="button"
                                                            style={{width: "100px"}}>print</a>
                                                        <a class="btn btn-primary btn-one" href="#" role="button"
                                                            style={{width: "100px"}}>share</a>
                                                    </div>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td class="align-middle">2 <input type="checkbox"/></td>
                                                <td class="align-middle">2018-09</td>
                                                <td class="align-middle">100398</td>
                                                <td class="align-middle">iPhone X</td>
                                                <td class="align-middle">2018-09</td>
                                                <td class="align-middle">
                                                    <div>
                                                        <a class="btn btn-success" href="#" role="button"
                                                            style={{width: "100px"}}>print</a>
                                                        <a class="btn btn-primary btn-one" href="#" role="button"
                                                            style={{width: "100px"}}>share</a>
                                                    </div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                    <p>Copyright © 2020. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
                <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header text-center">
                      <h4 class="modal-title w-100">Create Ticket</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="container">
                        <h4 class="pt-3">Number</h4>
                        <form class="text-center">
                            <div class="form-group row mx-1">
                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">1</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">2</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">3</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">4</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">5</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">6</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">7</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">8</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">9</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>

                              <div class="col-xs-1 ml-2 my-2">
                                <a href="#" role="button" class="btn btn-primary btn-xs my-1">10</a>
                                <input class="form-control" id="ex1" type="text" size="1"/>
                              </div>
                              
                            </div>
                          </form>
                    </div>
                  
                    <div class="modal-body mx-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-xs-6">
                                    <div class="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Total Amount</label>
                                        <input type="number" id="defaultForm-email" class="form-control validate" placeholder="Amount"/>
                        
                                    </div>
                                </div>
                        
                                <div class="col-lg-6 col-sm-6 col-xs-6">
                                    <div class="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Draw no.</label>
                                        <input type="text" id="defaultForm-email" class="form-control validate" placeholder="draw no."/>
                        
                                    </div>
                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-xs-6">
                                    <div class="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Agent Name</label>
                                        <input type="text" id="defaultForm-email" class="form-control validate" placeholder="Agent Name"/>
                        
                                    </div>
                                </div>
                        
                                <div class="col-lg-6 col-sm-6 col-xs-6">
                                    <div class="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Agent ID</label>
                                        <input type="text" id="defaultForm-email" class="form-control validate" placeholder="Agent ID"/>
                        
                                    </div>
                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-xs-6">
                                    <div class="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">Date & Time</label>
                                        <input type="datetime-local" id="defaultForm-email" class="form-control validate" placeholder="Date & Time"/>
                                      
                                      </div>
                                </div>
                        
                                <div class="col-lg-6 col-sm-6 col-xs-6">
                                    <div class="md-form mb-4">
                                        <label data-error="wrong" data-success="right" for="defaultForm-email">QR Code</label>
                                        <input type="text" id="defaultForm-email" class="form-control validate" placeholder="QR Code"/>
                        
                                    </div>
                                </div>
                            </div>
                        
                        </div>
              
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                      <button type="submit" class="btn btn-md btn-success">Submit</button>
                      <button type="reset" class="btn btn-md btn-secondary">Reset</button>
              
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
