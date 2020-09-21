import React, { Component } from 'react'
import Cricket from '../agentDashboard/Cricket'
import Lottery from '../agentDashboard/Lottery'
import AgentNavbar from '../agentDashboard/AgentNavbar'
import MobHeader from '../Common/MobHeader';
import WebHeader from '../Common/WebHeader';
// import { POST } from '../../Services/Api';

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
                lottery:true
            })
        }
        else if(id === "cricket"){
            this.setState({
                lottery:false,
                cricket:true
            })
        }
    }

    render() {
        return (
            <div className="animsition">
                <div className="page-wrapper">
                    <MobHeader manageToggle={(id) => this.manageToggle(id)} />
                    <AgentNavbar manageToggle={(id) => this.manageToggle(id) }/>         
                    <div className="page-container">
                        <WebHeader/>
                        <div className="main-content">                   
                            {   this.state.cricket===false ? <Lottery /> : null }
                            {   this.state.cricket ? <Cricket/> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
