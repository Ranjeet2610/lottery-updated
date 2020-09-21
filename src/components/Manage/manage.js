import React, { Component } from 'react';
import MobHeader from '../Common/MobHeader';
import NavBar from '../Common/NavBar';
import WebHeader from '../Common/WebHeader';
import ManageLottery from './ManageLottery';
import ManageCricket from './ManageCricket'
import AdminPage from './adminPage';
import TicketHistory from "./ticketHistory";
import { POST } from '../../Services/Api';

export default class manage extends Component {
    constructor(){
        super();
        this.state = {
            AdminPage:false,
            Manage_Lottery:false,
            Manage_Cricket:false,
            ticketHistory:false,
            manageLotteryData:[],
            ticketHistoryData:[],
        }
    }

    componentDidMount(){

        this.setState({
            AdminPage: true
        })
        
        POST("getTicketsByAdmin")
        .then(res=>{
            this.setState({
                manageLotteryData:res.data
            })
        })
        .catch(error=>{
            console.log(error)
        })    
    }

    getTicketsByuser = async (id) => {
        const obj = {
            agentId:id
          }
        await POST("getTicketsByuser",obj)
        .then(res=>{
            this.setState({
                ticketHistoryData:res.data.Data
            })
           // console.log("res",res.data.Data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    manageToggle = (id) =>{
        if(id === "Manage_Lottery"){
            this.setState({
                AdminPage:false,
                Manage_Cricket:false,
                Manage_Lottery:true,
            })
        }
        else if(id === "Manage_Cricket"){
            this.setState({
                AdminPage:false,
                Manage_Lottery:false,
                Manage_Cricket:true
            })
        }
        else if(id === "Admin"){
            this.setState({
                AdminPage:true,
                Manage_Lottery:false,
                Manage_Cricket:false
            })
        }
        else if(id!==""){
            this.setState({
                AdminPage:false,
                Manage_Lottery:false,
                Manage_Cricket:false,
                ticketHistory:true,
            })
        }
        else if(id==="false"){
            this.setState({
                ticketHistory:false
            })
        }

        this.getTicketsByuser(id); 
    }

    render() {
        return (
            <div className="animsition">
                <div className="page-wrapper">
                    <MobHeader manageToggle={(id) => this.manageToggle(id)}/>
                    <NavBar manageToggle={(id) => this.manageToggle(id) }/>         
                    <div className="page-container">
                        <WebHeader/>
                        <div className="main-content">
                            {//(this.state.Manage_Cricket===false && this.state.Manage_Lottery === false && this.state.AdminPage===false && this.state.ticketHistory===false) ? <AdminPage manageToggle={(id) => this.manageToggle(id) }/> : null
                        }
                            
                            {   this.state.AdminPage ? <AdminPage manageToggle={(id) => this.manageToggle(id) }/> : null }
                            {   this.state.Manage_Lottery ? <ManageLottery lottery={this.state.manageLotteryData}/> : null }
                            {   this.state.Manage_Cricket ? <ManageCricket/> : null }
                            {   this.state.ticketHistory ? <TicketHistory historyData={this.state.ticketHistoryData} manageToggle={(id) => this.manageToggle(id)}></TicketHistory> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}