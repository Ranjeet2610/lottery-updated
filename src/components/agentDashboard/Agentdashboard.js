import React, { Component } from 'react'
import Cricket from '../agentDashboard/Cricket'
import Lottery from '../agentDashboard/Lottery'
import AgentNavbar from '../agentDashboard/AgentNavbar'
import MobHeader from '../Common/MobHeader';
import WebHeader from '../Common/WebHeader';
import { POST } from '../../Services/Api';

export default class Agentdashboard extends Component {
    constructor(){
        super();
        this.state = {
            lottery:true,
            cricket:false,
            ticketList:[]
        }
    }

    componentDidMount(){
        var userName1 = localStorage.getItem("user.data.userName")
        const obj={
            agentId:userName1
        }
        POST("getTicketsByuser",obj)
        .then(res=>{
            this.setState({
                ticketList:res
            })
            console.log("sg",this.state.ticketList)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    manageToggle = (id) =>{
        if(id === "lottery"){
            this.setState({
                cricket:false,
                lottery:!this.state.lottery
            })
        }
        else if(id === "cricket"){
            this.setState({
                lottery:false,
                cricket:!this.state.cricket
            })
        }
    }

    // componentDidMount(){
    //     console.log("fkns",this.props)
    // }


    render() {
        return (
            <div className="animsition">
                <div className="page-wrapper">
                    <MobHeader/>
                    <AgentNavbar manageToggle={(id) => this.manageToggle(id) }/>         
                    <div className="page-container">
                        <WebHeader/>
                        <div className="main-content">                   
                            {   this.state.cricket===false ? <Lottery lotteryTicketData={this.state.ticketList} /> : null }
                            {   this.state.cricket ? <Cricket/> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
