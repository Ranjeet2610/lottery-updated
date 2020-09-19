import React, { Component } from 'react'
import '../Assets/css/style-2.css'
import Barcode from '../Assets/images/bar-code2.jpg'

export default class Lottery extends Component {
    render() {
        return (
            
                <div class="wrapper container">
                    <div class="logo"></div>

                    {
                        // <!-- First Container -->
                    }

                    <div class="container">
                        <div class="row row-one">
                            <div class="col-lg-3 col-3">
                                <small>Draw #23</small>
                            </div>

                            <div class="col-lg-9 col-9 border">
                                <p className="border text-center" style={{justifyContent:'center'}}> <span style={{paddingRight: "20px",border:"2px solid black"}}>**RECEIPT**</span> 27/08/2020 - 03:30 PM</p>
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
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>1</span>(One)</small> <br />
                                <small>₹200</small>
                            </div>

                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>2</span>(Two)</small> <br />
                                <small>₹200</small>
                            </div>
                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>3</span>(Three)</small>
                            </div>
                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>4</span>(Four)</small> <br />
                                <small>₹200</small>
                            </div>
                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>5</span>(Five)</small> <br />
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>6</span>(Six)</small> <br />
                            </div>

                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>7</span>(Seven)</small> <br />
                            </div>

                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>8</span>(Eight)</small> <br />
                            </div>

                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>9</span>(Nine)</small> <br />
                            </div>

                            <div class="col-lg-2 col-2 nos">
                                <small><span style={{fontSize: "22px", fontWeight: "500"}}>10</span>(Ten)</small> <br />
                            </div>
                        </div>
                    </div>

                    <div class="row row-six">
                        <div class="col-lg-6 col-6">
                            <h5>total amount</h5>
                        </div>

                        <div class="col-lg-6 col-6">
                            <p class="text-dark">₹ 600</p>
                        </div>
                    </div>

                    {
                        // <!-- Forth Container -->
                    }
                    <div class="container">
                        <div class="row row-seven">
                            <div>
                                <h6>agent name - babloo</h6>
                                <h6>agent id - 00000-000-000</h6>
                            </div>
                        </div>

                        <div class="row row-eight">
                            <div class="col-lg-12 col-12">
                                <img src= {Barcode} class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
    


        )
    }
}