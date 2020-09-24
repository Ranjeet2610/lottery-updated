import React, { Component } from 'react'

export default class ManageLottery extends Component {
    constructor(props){
        super(props);
        this.state={
            lotteryData:this.props.lottery.Data,
            drdown:this.props.lottery.Data
        }
    }

    handleFilter= async(e) => {
        // debugger
        let dataArray = [...this.state.drdown]
        let searchUser = e.target.value.toLowerCase();
        const updateList = dataArray.filter(user => user.status===searchUser)
        if(searchUser!==""){
            await this.setState({
                lotteryData:updateList
            })
        }
        else{
            await this.setState({
                lotteryData:this.state.drdown
            })
        }
    }

    render() {
            return (
                <div className="section__content border section__content--p30 mt-5">
                    <div className="d-flex row">
                        <h1 className="ml-3 mb-4 col-lg-4 col-12 border">Manage Lottery</h1>
                        <select name="drdown" className="ml-5 col-lg-3 col-9 drdn mb-4 w-25" style={{borderRadius:'10px',border:"none",outline:'none  '}} onChange={this.handleFilter}>
                            <option value="">Open/Settled</option>
                            <option value="open">Open</option>
                            <option value="settled">settled</option>
                        </select>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive table--no-card m-b-30">
                                    <table className="table table-striped table-bordered table-earning table-hover">
                                        <thead>
                                            <tr className="text-center">
                                                <th>S.No.</th>
                                                <th>agent&nbsp;ID</th>
                                                <th>agent&nbsp;name</th>
                                                <th>Status</th>
                                                <th>ticket&nbsp;number</th>
                                                <th>ticket&nbsp;value</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            this.state.lotteryData.map((ele,i)=>{
                                                return(
                                                    <tr>
                                                        <td className="align-middle">{i+1}</td>
                                                        <td className="align-middle">{ele.agentId}</td>
                                                        <td className="align-middle">{ele.agentName}</td>
                                                        <td className="align-middle">{ele.status}</td>
                                                        <td className="align-middle">{ele._id}</td>
                                                        <td className="align-middle">{ele.totalAmount}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>

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
