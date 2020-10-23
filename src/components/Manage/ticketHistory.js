import React, { Component } from 'react'

export default class ticketHistory extends Component {
    render() {
        const listdata = this.props.historyData;
        let i=0;
        return (
            <div className="main-content">
            <h1 className="ml-3 mb-4 border">Ticket History</h1>
                <div className="table-responsive table--no-card m-b-30">
                    <table className="table table-bordered table-striped table-earning">
                        <thead>
                            <tr className="text-center">
                                <th>S.No.</th>
                                <th>number</th>
                                <th>ticket&nbsp;amount</th>
                                <th>draw&nbsp;number</th>
                                <th>date&nbsp;&&nbsp;time</th>
                            </tr>
                        </thead>
                    { 
                        listdata.length > 0 ?
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
                        :
                        <tr>
                            <td style={{fontSize:'50px',paddingLeft:'35rem',paddingTop:'5rem'}} colspan="5">No Data !</td>
                            
                        </tr>                       
                    }

                    </table>
                </div>
            </div>
        )
    }
}
