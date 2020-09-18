import React, { Component } from 'react'

export default class ManageLottery extends Component {
    constructor(props){
        super(props);
        this.state={
            lotteryData:this.props.lottery,
        }
    }

    render() {
        let i=0;
        return (
                <div className="section__content border section__content--p30 mt-5">
                <h1 className="ml-3 mb-4 border">Manage Lottery</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive table--no-card m-b-30">
                                    <table className="table table-striped table-bordered table-earning table-hover">
                                        <thead>
                                            <tr className="text-center">
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
                                                        <td className="align-middle">{i}</td>
                                                        <td className="align-middle">{ele.agentId}</td>
                                                        <td className="align-middle">{ele.agentName}</td>
                                                        <td className="align-middle">{ele._id}</td>
                                                        <td className="align-middle">{ele.totalAmount}</td>
                                                    </tr>
                                                </tbody>
                                                )
                                            }
                                                )
                                            }
                                                
            
                                            
            
                                            {
                                            //     <tr>
                                            //     <td className="align-middle">2</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td className="align-middle">3</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td className="align-middle">4</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td className="align-middle">5</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td className="align-middle">6</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td className="align-middle">7</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
            
            
                                            // <tr>
                                            //     <td className="align-middle">8</td>
                                            //     <td className="align-middle">2018-09</td>
                                            //     <td className="align-middle">100398</td>
                                            //     <td className="align-middle">iPhone X</td>
                                            //     <td className="align-middle">2018</td>
            
                                            // </tr>
                                        }
            
            
                                    </table>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright">
                                    <p>Copyright © 2020. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
