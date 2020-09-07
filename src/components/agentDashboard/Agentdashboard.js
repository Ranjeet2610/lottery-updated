import React, { Component } from 'react'
import Cricket from '../agentDashboard/Cricket'
import Lottery from '../agentDashboard/Lottery'
import AgentNavbar from '../agentDashboard/AgentNavbar'
import MobHeader from '../Common/MobHeader';
import WebHeader from '../Common/WebHeader';

export default class Agentdashboard extends Component {
    constructor(){
        super();
        this.state = {
            lottery:true,
            cricket:false,
        }
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

    componentDidMount(){
        console.log("fkns",this.props)
    }


    render() {
        return (
            <div className="animsition">
                <div className="page-wrapper">
                    <MobHeader/>
                    <AgentNavbar manageToggle={(id) => this.manageToggle(id) }/>         
                    <div className="page-container">
                        <WebHeader/>
                        <div className="main-content">                   
                            {   this.state.lottery ? <Lottery/> : null }
                            {   this.state.cricket ? <Cricket/> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
