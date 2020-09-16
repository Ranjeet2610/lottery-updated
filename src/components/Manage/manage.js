import React, { Component } from 'react';
import MobHeader from '../Common/MobHeader';
import NavBar from '../Common/NavBar';
import WebHeader from '../Common/WebHeader';
import ManageLottery from './ManageLottery';
import ManageCricket from './ManageCricket'
import AdminPage from './adminPage';
import { POST } from '../../Services/Api';

export default class manage extends Component {
    constructor(){
        super();
        this.state = {
            AdminPage:false,
            Manage_Lottery:false,
            Manage_Cricket:false,
            manageLotteryData:[],
        }
    }

    componentDidMount(){
        POST("getTicketsByAdmin")
        .then(res=>{
            this.setState({
                manageLotteryData:res.data
            })
            // console.log("lottery",res.data)
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
                Manage_Lottery:!this.state.Manage_Lottery
            })
        }
        else if(id === "Manage_Cricket"){
            this.setState({
                AdminPage:false,
                Manage_Lottery:false,
                Manage_Cricket:!this.state.Manage_Cricket
            })
        }
        else{
            this.setState({
                AdminPage:!this.state.AdminPage,
                Manage_Lottery:false,
                Manage_Cricket:false,
            })
        }
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
                            {(this.state.Manage_Cricket===false && this.state.Manage_Lottery === false && this.state.AdminPage===false) ? <AdminPage/> : null}
                            {   this.state.AdminPage ? <AdminPage/> : null }
                            {   this.state.Manage_Lottery ? <ManageLottery lottery={this.state.manageLotteryData}/> : null }
                            {   this.state.Manage_Cricket ? <ManageCricket/> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}