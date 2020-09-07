import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class cricket extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">

                                <button className="au-btn au-btn-icon btn-primary float-right mb-4" data-toggle="modal" data-target="#modalForm-two">
                                    <i className="fa fa-plus mr-2"></i>Khayi</button>

                                <button className="au-btn au-btn-icon btn-primary float-right mb-4 mr-3" data-toggle="modal" data-target="#modalForm-one">
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
            </div>
        )
    }
}
