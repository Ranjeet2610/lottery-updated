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
                <div className="d-flex float-right pr-5 mr-5">
                    <ReactToPrint
                        trigger={() => {
                        return (
                            <div style={{paddingLeft:'100px'}}>
                                <button className="btn btn-success m-2">Print</button>
                            </div>)
                        }}
                        content={() => this.componentRef}
                    />
                      <button className="btn btn-primary m-2"  onClick={(e) => {
                           e.preventDefault();
                           window.location.href='https://api.whatsapp.com/send?phone=12134104200&text=';
                          }}>Share</button>         
                </div>
                <div className="align-item-center m-3 border">
                    <LotteryT info={this.state.ticketData} ref={el => (this.componentRef = el)} />
                </div>
                 
            </div>
        )
    }
}
