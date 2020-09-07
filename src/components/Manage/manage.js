import React, { Component } from 'react';
import MobHeader from '../Common/MobHeader';
import NavBar from '../Common/NavBar';
import WebHeader from '../Common/WebHeader';
import ManageLottery from './ManageLottery';
import ManageCricket from './ManageCricket'
import AdminPage from './adminPage';

export default class manage extends Component {
    constructor(){
        super();
        this.state = {
            Manage_Lottery:false,
            Manage_Cricket:false,
        }
    }

    manageToggle = (id) =>{
        if(id === "Manage_Lottery"){
            this.setState({
                Manage_Cricket:false,
                Manage_Lottery:!this.state.Manage_Lottery
            })
        }
        else if(id === "Manage_Cricket"){
            this.setState({
                Manage_Lottery:false,
                Manage_Cricket:!this.state.Manage_Cricket
            })
        }
    }

    render() {
        return (
            <div className="animsition">
                <div className="page-wrapper">
                    <MobHeader/>
                    <NavBar manageToggle={(id) => this.manageToggle(id) }/>         
                    <div className="page-container">
                        <WebHeader/>
                        <div className="main-content">
                            {(this.state.Manage_Cricket===false && this.state.Manage_Lottery === false) ? <AdminPage/> : null}
                            {   this.state.Manage_Lottery ? <ManageLottery/> : null }
                            {   this.state.Manage_Cricket ? <ManageCricket/> : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}