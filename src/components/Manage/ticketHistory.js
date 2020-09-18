import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ticketHistory extends Component {
    constructor(props){
        super(props);
        this.state={
        list:[],
        arr:[1,2,3,4,5,6,7,8,9,0]
    }}

    componentDidMount(){
        this.setState({
            list:this.props.value
        })
    }

    render() {
        console.log("valuee",this.state.list)
        let i=0;
        return (
            <div className="main-content">
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
                    {
                        this.state.arr.map(ele=>{
                            i+=1
                            return(
                            <tbody>
                                <tr>
                                    <td className="align-middle">{i}</td>
                                    <td className="align-middle">{ele.agentId}</td>
                                    <td className="align-middle">{ele.totalAmount}</td>
                                    <td className="align-middle">iPhone X</td>
                                    <td className="align-middle">{ele.createdAt}</td>
                                    <td className="align-middle">
                                        <div>
                                            <Link className="btn btn-success mr-1"  role="button" style={{width: "100px"}}>print</Link> 
                                            <Link className="btn btn-primary btn-one ml-1" role="button" style={{width: "100px"}}>share</Link>
                                        </div>
                                    </td>
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
