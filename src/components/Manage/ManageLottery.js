import React, { Component } from 'react'

export default class ManageLottery extends Component {
    constructor(props){
        super(props);
        this.state={
            lotteryData:this.props.lottery,
        }
    }

    render() {
        // console.log(this.state.lotteryData)
        let i=0;
        return (
                <div class="section__content border section__content--p30 mt-5">
                <h1 className="ml-3 mb-4 border">Manage Lottery</h1>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="table-responsive table--no-card m-b-30">
                                    <table class="table table-striped table-bordered table-earning table-hover">
                                        <thead>
                                            <tr class="text-center">
                                                <th>S.No.</th>
                                                <th>agent ID</th>
                                                <th>agent name</th>
                                                <th>ticket no.</th>
                                                <th>ticket value</th>
                                            </tr>
                                        </thead>
                                        {
                                            this.state.lotteryData.Data.map(ele=>{
                                                i+=1
                                                return(
                                                <tbody>
                                                    <tr>
                                                        <td class="align-middle">{i}</td>
                                                        <td class="align-middle">{ele.agentId}</td>
                                                        <td class="align-middle">{ele.agentName}</td>
                                                        <td class="align-middle">{ele._id}</td>
                                                        <td class="align-middle">{ele.totalAmount}</td>
                                                    </tr>
                                                </tbody>
                                                )
                                            }
                                                )
                                            }
                                                
            
                                            
            
                                            {
                                            //     <tr>
                                            //     <td class="align-middle">2</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td class="align-middle">3</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td class="align-middle">4</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td class="align-middle">5</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td class="align-middle">6</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td class="align-middle">7</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td class="align-middle">8</td>
                                            //     <td class="align-middle">2018-09</td>
                                            //     <td class="align-middle">100398</td>
                                            //     <td class="align-middle">iPhone X</td>
                                            //     <td class="align-middle">2018</td>
            
                                            // </tr>
                                        }
            
            
                                    </table>
                                </div>
                            </div>

                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                    <p>Copyright © 2020. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
