import React, { Component } from 'react'
import LotteryT from '../lotteryT'
import ReactToPrint from "react-to-print";


export default class printTicket extends Component {
    constructor(props){
        super(props);
        this.state={
            flag:false,
            ticketData:this.props.location.state.data
        }
    }
    
    
    render() {
        return (
            <div>
                <div className="d-flex">
                    <div className="ml-5">
                        <button className="btn btn-primary m-2 ml-5">Share</button>
                    </div>
                    
                    <div className="">
                        <ReactToPrint
                            trigger={() => {
                            return (
                                <div className="">
                                    <button className="btn btn-success m-2">Print</button>
                                </div>)
                            }}
                            content={() => this.componentRef}
                        />
                    </div>
                </div>
                <div className="align-item-center m-3 border">
                    <LotteryT info={this.state.ticketData} ref={el => (this.componentRef = el)} />
                </div>
                 
            </div>
        )
    }
}
