import React, { Component } from 'react'

export default class adminPage extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-lg btn-danger float-right mb-4">
                                    <i className="fa fa-trash mr-2"></i> 
                                    DELETE AGENT
                                </button>

                                <button className="btn btn-lg btn-dark float-right mb-4 mr-2">
                                    <i className="fa fa-ban mr-2"></i>BLOCK AGENT</button>

                                <button className="btn btn-lg btn-success float-right mb-4 mr-2" data-toggle="modal" data-target="#modalLoginForm">
                                    <i className="fas fa-plus mr-2"></i>
                                    ADD AGENT
                                </button>


                                <div className="table-responsive m-b-30">
                                    <table className="table table-bordered table-striped table-earning table-hover">
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>User ID</th>
                                                <th>Website</th>
                                                <th>commission</th>
                                                <th>Credit Limit</th>
                                                <th>View More</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">1 
                                                    <input type="checkbox" />
                                                </td>
                                                <td className="align-middle">2018-09 </td>
                                                <td className="align-middle">100398</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">iPhone X</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">2 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100397</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">Samsung S8</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">3 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100396</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">Game Console</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">4 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100395</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">iPhone X</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">5 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100393</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">USB 3.0</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">6 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100392</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">Smartwatch 4.0</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">7 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100391</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">Camera C430W</td>
                                                <td className="align-middle">
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle">8 <input type="checkbox" /></td>
                                                <td className="align-middle">2018-09</td>
                                                <td className="align-middle">100393</td>
                                                <td className="align-middle">10%</td>
                                                <td className="align-middle">USB 3.0</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View More
                                                            <span className="caret"></span></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Free Chip Deposit</a></li>
                                                            <li><a href="#">Free Chip Withdrawal</a></li>
                                                            <li><a href="#">Ticket History</a></li>
                                                            <li className="dropdown-submenu">
                                                                <a className="test dropdown-toggle" data-toggle="dropdown" tabindex="-1" href="#" aria-haspopup="true" aria-expanded="false">
                                                                    Commission<span className="caret"></span></a>
                                                                <ul className="dropdown-menu">
                                                                  <li><a tabindex="-1" href="#">commission 1</a></li>
                                                                  <li><a tabindex="-1" href="#">commission 2</a></li>
                                                                </ul>
                                                              </li>
                                                        </ul>
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
                                    <p>Copyright © 2018. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
