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
        console.log(this.state.ticketData)
        return (
            <div>
            <ReactToPrint
            trigger={() => {
              return <div style={{paddingLeft:'100px'}}><button className="btn btn-success m-2">Print</button></div>
            }}
            content={() => this.componentRef}
          />
          <LotteryT info={this.state.ticketData} ref={el => (this.componentRef = el)} />
            </div>
        )
    }
}
