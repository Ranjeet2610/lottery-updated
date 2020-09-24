import React, { Component } from 'react'
import '../Assets/css/style-2.css'
import { POST } from '../Services/Api';
import QRCode from "qrcode.react";

export default class Lottery extends Component {
    constructor(props){
        super(props);
        this.state={
            propsInfo:this.props.info,
            addEvent:[],
            resultDate:'',
            qrInfo:'',
            tgTime:'',
            tgDate:''
        }
    }

    componentDidMount(){
        POST("getResult")
        .then(res=>{
            this.setState({
                addEvent:res.data.resultDetail
            })
        })
        .catch(error=>{
            console.log(error)
        })
        this.date();
        this.filterAmount();
    }

    date = async() => {
        let arr = this.state.propsInfo.ele.createdAt.split("T")
        let t = arr[1].substring(0,5);
        await this.setState({
            tgDate:arr[0],
            tgTime:t
        })
        console.log(this.state.tgDate,this.state.tgTime)
    }


    filterAmount = () => {
        let obj =[];
            Object.keys(this.state.propsInfo.ele).map((item, i) => {
                if(this.state.propsInfo.ele[item]>0){
                    if(item==="one"){
                        let num="1"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="two"){
                        let num="2"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="three"){
                        let num="3"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="four"){
                        let num="4"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="five"){
                        let num="5"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="six"){
                        let num="6"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="seven"){
                        let num="7"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="eight"){
                        let num="8"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="nine"){
                        let num="9"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else if(item==="ten"){
                        let num="10"
                        obj.push(`${num}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    else{
                        obj.push(`${item}=${this.state.propsInfo.ele[item]}Rs`)
                    }
                    
                }
            }
        )
        
            this.setState({
                qrInfo:obj.join(', ')
            })
        }

    render() {
        return (
            <div>
                <div className="wrapper container">
                {
                    // <div className="logo"></div>
                    // <!-- First Container -->
                    }
        
                        <div className="row row-one" >
                            <div className="col-lg-4 col-5">
                                <small className="heading-1">{this.state.propsInfo.ele._id}</small>
                            </div>

                            <div className="col-lg-4 col-2">
                                <small className="heading-2 offset-0 blah" >***RECEIPT***</small>
                            </div>
                        

                            <div className="col-lg-4  col-5 ">
                                <small className="heading-3 ml-4 mt-2" >{this.state.tgDate}&nbsp;-&nbsp;{this.state.tgTime} PM</small>
                            </div>

            
                    </div>
                
                    {
                        // <!-- Second Container -->
                    }
                    
                    {
                        this.state.addEvent.map(element=>
                    <div className="container second-container">
                        <div className="row-text">
                            <h2>Result Date : { element.resultDate }</h2>
                            </div>
                                <div className="row row-two">
                                    <div className="text-one">
                                       <h2>Valid Receipt For 1 Draw(s)</h2>
                                    </div>
                                </div>
                                    
                                <div className="row row-two mt-2">
                                    <div className="text-two">
                                        <h2>result time : {element.openTime }&nbsp;{(parseInt(element.openTime)>12) ? "PM" : "AM"} to { element.resultTime }&nbsp;{(parseInt(element.openTime)>12) ? "PM" : "AM"}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        // <!-- Thrid Container -->  
                    }
                    
                    <div className="container text-center mt-4">
                        <div className="row num ml-1">
                            <div className="col-lg-2 col-md-2 col-3 nos ">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>1</span>(One)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.one}</small>
                            </div>

                            <div className="col-lg-2 col-md-2 col-3 nos ml-1">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>2</span>(Two)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.two}</small>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3 nos ml-1">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>3</span>(Three)</small><br/>
                                <small>₹{this.state.propsInfo.ele.three}</small>
                            </div>
                            <div className="col-lg-2 col-md-3 col-3 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>4</span>(Four)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.four}</small>
                            </div>
                            <div className="col-lg-2 col-md-2 col-3 nos ml-1">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>5</span>(Five)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.five}</small>
                            </div>
                        
                            <div className="col-lg-2 col-md-2 col-3 nos ml-1">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>6</span>(Six)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.six}</small>
                            </div>

                            <div className="col-lg-2 col-md-2 col-3 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>7</span>(Seven)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.seven}</small>
                            </div>

                            <div className="col-lg-2 col-md-3 col-3 nos ml-1">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>8</span>(Eight)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.eight}</small>
                            </div>

                            <div className="col-lg-2 col-md-3 col-3 nos ml-1">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>9</span>(Nine)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.nine}</small>
                            </div>

                            <div className="col-lg-2 col-md-2 col-3 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>10</span>(Ten)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.ten}</small>
                            </div>
                        </div>
                    </div>
                    <div className="row row-six">
                        <div className="col-lg-6 col-6">
                            <h5 style={{paddingTop:'5px'}}>total amount</h5>
                        </div>

                        <div className="col-lg-6 col-6">
                            <p className="text-dark">₹{this.state.propsInfo.ele.totalAmount}</p>
                        </div>
                    </div>

                    {
                        // <!-- Forth Container -->
                    }
                    <div className="container">
                        <div className="row row-seven">
                            <div>
                                <h6>agent name - {this.state.propsInfo.ele.agentName}</h6>
                                <h6>agent id - {this.state.propsInfo.ele.agentId}</h6>
                            </div>
                        </div>

                        <div className="row row-eight">
                            {
                                <div className="">
                                    <QRCode value={this.state.qrInfo} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}