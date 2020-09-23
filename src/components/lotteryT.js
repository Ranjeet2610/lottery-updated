import React, { Component } from 'react'
import '../Assets/css/style-2.css'
import Barcode from '../Assets/images/bar-code2.jpg'
import { POST } from '../Services/Api';

export default class Lottery extends Component {
    constructor(props){
        super(props);
        this.state={
            propsInfo:this.props.info,
            addEvent:[],
            resultDate:''
        }
    }

    componentDidMount(){
        POST("getResult")
        .then(res=>{
            this.setState({
                addEvent:res.data.resultDetail
            })
            // console.log("asd",this.state.addEvent)
        })
        .catch(error=>{
            console.log(error)
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
                    
                    
                        <div className="container" >
                        <div className="row row-one" >
                            <div className="col-lg-3 col-3" >
                                <small className="heading-1">{this.state.propsInfo.ele._id}</small>
                            </div>

                            <div className="col-lg-2 col-2 offset-2">
                                <small className="heading-2" >***RECEIPT***</small>
                            </div>
                        

                            <div className="col-lg-3  col-5 offset-0">
                                <small className="heading-3" >{this.state.propsInfo.ele.createdAt}{/*27/08/2020 - 03:30 PM*/}</small>
                            </div>

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
                        <div className="row">
                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>1</span>(One)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.one}</small>
                            </div>

                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>2</span>(Two)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.two}</small>
                            </div>
                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>3</span>(Three)</small><br/>
                                <small>₹{this.state.propsInfo.ele.three}</small>
                            </div>
                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>4</span>(Four)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.four}</small>
                            </div>
                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>5</span>(Five)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.five}</small>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>6</span>(Six)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.six}</small>
                            </div>

                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>7</span>(Seven)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.seven}</small>
                            </div>

                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>8</span>(Eight)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.eight}</small>
                            </div>

                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>9</span>(Nine)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.nine}</small>
                            </div>

                            <div className="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>10</span>(Ten)</small> <br/>
                                <small>₹{this.state.propsInfo.ele.ten}</small>
                            </div>
                        </div>
                    </div>
                    <div className="row row-six">
                        <div className="col-lg-6 col-6">
                            <h5>total amount</h5>
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
                            <div className="col-lg-12 col-12">
                                <img src={Barcode} className="img-fluid" alt="barCode"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}