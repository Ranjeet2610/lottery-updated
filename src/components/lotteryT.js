import React, { Component } from 'react'
import '../Assets/css/style-2.css'
import Barcode from '../Assets/images/bar-code2.jpg'

export default class Lottery extends Component {
    constructor(props){
        super(props);
        this.state={
            propsInfo:this.props.info
        }
    }
    render() {
        console.log("fsdfsd",this.state.propsInfo)
        return (
<body>
    <div class="wrapper container">
        <div class="logo"></div>

        {
            // <!-- First Container -->
        }

        <div class="container">
            <div class="row row-one">
                <div class="col-lg-3 col-3">
                    <small class="heading-1">{this.state.propsInfo.ele._id}</small>
                </div>

                <div class="col-lg-4 col-4">
                    <small class="heading-2">***RECEIPT***</small>
                </div>

                <div class="col-lg-5 col-5">
                    <small class="heading-3">{this.state.propsInfo.ele.createdAt}{/*27/08/2020 - 03:30 PM*/}</small>
                </div>

            </div>
        </div>

        {
            // <!-- Second Container -->
        }

        <div class="container second-container">
            <div class="row-text">
                <h2>result : 27/08/2020</h2>
            </div>
            <div class="row row-two">
                <div class="text-one">
                    <h2>valid receipt for 1 draw(s)</h2>
                </div>
            </div>

            <div class="row row-two mt-2">
                <div class="text-two">
                    <h2>from draw 11:58 to 11:58</h2>
                </div>
            </div>
        </div>

        {
            // <!-- Thrid Container -->
        }

        <div class="container text-center mt-4">
            <div class="row">
                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>1</span>(One)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.one}</small>
                </div>

                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>2</span>(Two)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.two}</small>
                </div>
                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>3</span>(Three)</small><br/>
                    <small>₹{this.state.propsInfo.ele.three}</small>
                </div>
                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>4</span>(Four)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.four}</small>
                </div>
                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>5</span>(Five)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.five}</small>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>6</span>(Six)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.six}</small>
                </div>

                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>7</span>(Seven)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.seven}</small>
                </div>

                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>8</span>(Eight)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.eight}</small>
                </div>

                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>9</span>(Nine)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.nine}</small>
                </div>

                <div class="col-lg-2 col-2 nos">
                    <small><span style={{fontSize: "22px", fontWeight: "500"}}>10</span>(Ten)</small> <br/>
                    <small>₹{this.state.propsInfo.ele.ten}</small>
                </div>
            </div>
        </div>

        <div class="row row-six">
            <div class="col-lg-6 col-6">
                <h5>total amount</h5>
            </div>

            <div class="col-lg-6 col-6">
                <p class="text-dark">₹{this.state.propsInfo.ele.totalAmount}</p>
            </div>
        </div>

        {
            // <!-- Forth Container -->
        }

        <div class="container">
            <div class="row row-seven">
                <div>
                    <h6>agent name - {this.state.propsInfo.ele.agentName}</h6>
                    <h6>agent id - {this.state.propsInfo.ele.agentId}</h6>
                </div>
            </div>

            <div class="row row-eight">
                <div class="col-lg-12 col-12">
                    <img src={Barcode} class="img-fluid" alt="barCode"/>
                </div>
            </div>
        </div>
    </div>

</body>

        )
    }
}