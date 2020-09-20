import React, { Component } from 'react'

export default class ticketHistory extends Component {
    render() {
        const listdata = this.props.historyData;
        let i=0;
        return (
            <div className="main-content">
                <button className="float-right mr-5 mb-2 btn btn-dark" oonClick={() => {this.props.history.goBack()}}>Back</button>
                <div className="table-responsive table--no-card m-b-30">
                    <table className="table table-bordered table-striped table-earning">
                        <thead>
                            <tr className="text-center">
                                <th>S.No.</th>
                                <th>number</th>
                                <th>ticket amount</th>
                                <th>draw number</th>
                                <th>date & time</th>
                            </tr>
                        </thead>
                    { 
                        listdata.map((ele) =>{
                            i+=1
                            return(
                            <tbody>
                                <tr>
                                    <td className="align-middle">{i}</td>
                                    <td className="align-middle">{ele.agentId}</td>
                                    <td className="align-middle">{ele.totalAmount}</td>
                                    <td className="align-middle">{ele._id}</td>
                                    <td className="align-middle">{ele.createdAt}</td>
                                </tr>
                            </tbody>
                            )
                        })
                    
                    }

                    </table>
                </div>
            </div>
        )
    }
}
