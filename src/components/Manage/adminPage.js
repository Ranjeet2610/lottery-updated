import React, { Component } from "react";
import DatePicker from 'react-datepicker';
// import TimePicker from 'react-time-picker';
import Modal from "react-bootstrap/Modal";
import { POST, GET } from "../../Services/Api";
import { Link } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
export default class adminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agentModal: false,
      depositModal: false,
      Name: "",
      userName: "",
      Commission: "",
      password: "",
      agentInfo: [],
      updatedChips:'',
      walletBalance: 0,
      viewMore: "none",
      viewCommission: "none",
      id: "",
      userLock: "",
      backColor: "",
      freeChips: "",
      chipFlag: false,
      eventFlag:false,
      indx:'',
      ticketHistoryData:[],
      winningNumber:'',
      ResultDate:new Date(),
      ResultTime:'',
      OpenDate:new Date(),
      OpenTime:'',
      resultSettlement:false,
      userID:'',
      brr:[1,2,3,4,5,6,7,8,9,10]
    };
  }

  componentDidMount() {
    let hour = new Date().getHours()
    let min = new Date().getMinutes()
    let time=hour+":"+min
    this.setState({
      ResultTime:time,
      OpenTime:time
    })
    // console.log(this.state.ResultDate)
    console.log(this.state.ResultDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10));
    this.getAgentList();
  }

  getAgentList = async () => {
    await GET("getUsers", { headerStatus: true })
      .then((res) => {
          if(res.data.length > 0){
              this.setState({
                  agentInfo: res.data
              })
              // console.log("fhdgf",this.state.agentInfo)
          }
      })
      .catch(err => {
          console.log(err)
      })
  };

  handleShow = (modalForm,userId,wallet) => {
    if (modalForm === "AddAgent")
      this.setState({
        agentModal: true,
      });
    if (modalForm === "Result Settlement")
      this.setState({
        resultSettlement: true,
        eventFlag:false
      });
    if (modalForm === "AddEvent")
      this.setState({
        resultSettlement: true,
        eventFlag:true
      });
    if (modalForm === "Deposit")
      this.setState({
        depositModal: true,
        id:userId,
        updatedChips:wallet
      });
    if (modalForm === "Withdrawl")
      this.setState({
        depositModal: true,
        chipFlag: true,
        id:userId,
        updatedChips:wallet
      });
  };

  handleClose = (modalForm) => {
    if (modalForm === "AddAgent") {
      this.setState({
        agentModal: false,
        eventFlag:false,
      });
    }
    if (modalForm === "Result Settlement")
      this.setState({
        resultSettlement: false,
      });
    if (modalForm === "Deposit") {
      this.setState({
        depositModal: false,
      });
    }
  };

  handleViewMore = async (index) => {
    await this.setState({
      indx: index,
    });
    if (this.state.viewMore === "none") {
      this.setState({
        viewMore: "block",
        backColor:'green'
      });
    } else {
      this.setState({
        viewMore: "none",
        backColor:''
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLock = async(userName,userid) => {
    await this.setState({
      userLock: userName,
      userID:userid
    })
  };

  handleBlock = () => {
    const obj = {
      userName: this.state.userLock,
    };
    POST("lockUser", obj, { headerStatus: true })
      .then((res) => {
        this.getAgentList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleAddUser = () => {
    const obj = {
      Name: this.state.Name,
      userName: this.state.userName,
      Commission: this.state.Commission,
      Date: this.state.Date,
      password: this.state.password,
    };
    POST("createAccount", obj, { headerStatus: true })
      .then((res) => {
        this.getAgentList()
      })
      .catch((error) => {
        console.log(error);
      });
    this.handleClose("AddAgent");
  };

  handleUpdateChip = (id, flag) => {
    const obj = {
      userid: id,
      fillAmount: parseInt(this.state.freeChips),
    }
    if (flag) {
      POST("debitAmountByAdmin", obj, { headerStatus: true })
        .then((res) => {
          this.setState({
            updatedChips:res.data.Data.walletBalance,
            viewMore:'none',
            backColor:''
          }, () => {
            this.getAgentList()
          })
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    else {
      POST("creditAmountByAdmin", obj, { headerStatus: true })
      .then((res) => {
        this.setState({
          updatedChips:res.data.Data.walletBalance,
          viewMore:'none',
          backColor:''
        },()=>this.getAgentList()
        )
        })
        .catch((error) => {
          console.log(error);
        });
    }
    this.handleClose("Deposit");
  };

  handleTicketHistory = (agName) => {
    this.props.manageToggle(agName)
  }

  handleResultDate = (paramdate) => {
       this.setState({
        ResultDate:paramdate
      })
    }

  handleResultTime = (paramdate) =>{
       this.setState({
        ResultTime:paramdate
      })
    }   

  handleOpenDate = (paramdate) =>{
    this.setState({
        OpenDate:paramdate
      })
    }      

  handleOpenTime = (paramdate) =>{
    this.setState({
        OpenTime:paramdate
      })
    }


  handleDelete = () => {
    const obj = {
      userId : this.state.userID
    }
    POST("deleteAgent",obj)
    .then(res=>{
      this.getAgentList();
    })
    .catch(error=>{
      console.log(error)
    })
  }

  updateResult = () => {
    const obj = {
      resultDate:this.state.ResultDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10),
      openDate:this.state.OpenDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10),
      openTime:this.state.OpenTime,
      resultTime:this.state.ResultTime
    }
    POST("updateResult",obj)
    .then(res=>{
      console.log(res)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  handleSubmit = (apiType) => {
    if(apiType==="Add Event"){
      this.updateResult();
    }
    else if(apiType==="Result Settlement"){
      console.log("No Api....!")
    }
  }


  render() {
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <button className="btn btn-admin btn-danger float-right mb-4" onClick={this.handleDelete}>
                                <i className="fa fa-trash mr-2"/>
                                DELETE AGENT
                            </button>
                            <button className="btn btn-admin btn-dark float-right mb-4 mr-2" onClick={this.handleBlock}>
                                <i className="fa fa-ban text-danger mr-2" />
                                BLOCK / UNBLOCK
                            </button>
                            <button className="btn btn-admin btn-success float-right mb-4 mr-2" onClick={() => this.handleShow("AddAgent")}>
                                <i className="fas fa-plus mr-2" />
                                ADD AGENT
                            </button>
                            <button 
                              className="btn btn-admin btn-secondary float-right mb-4 mr-2" 
                              onClick={() => this.handleShow("Result Settlement")}>
                              <i className="fas fa-poll mr-2" />
                              Result Settlement
                            </button>                  
                            <button 
                              className="btn btn-admin btn-secondary float-right mb-4 mr-2" 
                              onClick={() => this.handleShow("AddEvent")}>
                              <i className="fas fa-plus mr-2" />
                                Add Event
                            </button>    
                            
                            {
                              // <span className="mr-2">Result Date:</span>                
                              // <DatePicker selected={this.state.resultDate} onChange={(date)=>this.handleDatepicker(date)}/><br/>
                            }

                            <div className="table-responsive m-b-30">
                                <table className="table table-bordered table-striped table-earning table-hover">
                                    <thead>
                                        <tr>
                                        <th>S.No.</th>
                                        <th>Agent ID</th>
                                        <th>Website</th>
                                        <th>commission</th>
                                        <th>Credit Limit</th>
                                        <th>View More</th>
                                        </tr>
                                    </thead>
                                        {
                                          (this.state.agentInfo.length < 0) ? <div className="justify-content-center">Empty !</div> :
                                            (this.state.agentInfo.map((ele, index) => {
                                               
                                                return (
                                                  <tbody>

                                                    <tr>
                                                        <td className="align-middle">
                                                        {index+1}&nbsp;
                                                        <input
                                                            name="radio"
                                                            type="radio"
                                                            onClick={() => {
                                                            this.handleLock(ele.userName,ele.id);
                                                            }}
                                                        />
                                                        &nbsp;
                                                        {ele.blocked ? (
                                                            <i className="fas fa-ban text-danger" />
                                                        ) : null}
                                                        </td>
                                                        <td className="align-middle">{ele.userName}</td>
                                                        <td className="align-middle">{ele.id}</td>
                                                        <td className="align-middle">{ele.Commission}</td>
                                                        <td className="align-middle">
                                                        {ele.walletBalance}
                                                        </td>
                                                        <td className="align-middle">
                                                            <div className="dropdown">
                                                                <button style={(this.state.indx === index) ? {backgroundColor:this.state.backColor}: null}
                                                                    className="btn btn-primary btn-sm dropdown-toggle button-one"
                                                                    type="button"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    onClick={() => {
                                                                        this.handleViewMore(index);
                                                                    }}
                                                                >
                                                                    View More
                                                                </button>
                                                                {
                                                                    this.state.indx === index ? 
                                                                    <ul className="dropdown-menu" style={{ display: this.state.viewMore }} >
                                                                        <li>
                                                                            <Link onClick={() => { this.handleShow("Deposit",ele.id,ele.walletBalance) }}>
                                                                                Free Chip Deposit
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link onClick={() => { this.handleShow("Withdrawl",ele.id,ele.walletBalance) }} >
                                                                                Free Chip Withdrawal
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link onClick={()=>this.handleTicketHistory(ele.userName)}>
                                                                              Ticket History
                                                                            </Link>
                                                                        </li>
                                                                    </ul> : null
                                                                }
                                                            </div>
                                                        </td>
                                                        </tr>
                                                      </tbody>
                                                )}
                                            ))
                                            
                                        }
                                </table>

                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="copyright">
                                        <p>Copyright © 2020. All rights reserved.</p>
                                    </div>
                                    </div>
                                </div>
                          </div>
                  
                        </div>
                    </div>
                </div>
            </div>

            {
              // Modal for Result SettleMent and Add Event
            }
            <Modal show={this.state.resultSettlement} onHide={()=>this.handleClose("Result Settlement")}>
                              <Modal.Header closeButton className="bg-dark">
                                <Modal.Title>{this.state.eventFlag ? "Add Event" : "Result Settlement"}</Modal.Title>
                              </Modal.Header>
                              {
                                this.state.eventFlag ?
                                <Modal.Body>
                                  <div className="d-flex my-2">
                                    <label className="lead label_calender">Result Date:</label>
                                    <div className="rcalender  ml-1">
                                      <DatePicker 
                                        peekNextMonth 
                                        showMonthDropdown 
                                        showYearDropdown 
                                        dropdownMode="select" 
                                        dateFormat="dd/MM/yyyy" 
                                        selected={this.state.ResultDate}
                                        className="" 
                                        onChange={(ResultDate)=>this.handleResultDate(ResultDate)}/>
                                    </div>
                                  </div>
                                  <div className="d-flex my-2">
                                    <label className="lead label_calender">Result Time:</label>
                                    <div className="rcalender border ml-1">
                                      <input
                                        className=""
                                        type="time"
                                        defaultValue={this.state.ResultTime}
                                        onChange={this.handleResultTime}/>
                                    </div>
                                  </div>
                                  <div className="d-flex my-2">
                                    <label className="lead label_calender">Open Date&nbsp;:</label>
                                    <div className="rcalender border ml-1">  
                                      <DatePicker 
                                        peekNextMonth 
                                        showMonthDropdown 
                                        showYearDropdown 
                                        dropdownMode="select" 
                                        dateFormat="dd/MM/yyyy" 
                                        selected={this.state.OpenDate}
                                        className="" 
                                        onChange={(OpenDate)=>this.handleOpenDate(OpenDate)}/>
                                    </div>
                                  </div>
                                  <div className="d-flex my-2">
                                    <label className="lead label_calender">Open Time&nbsp;:</label>
                                    <div className="rcalender border ml-1">
                                      <input 
                                        className="calender"
                                        type="time"
                                        defaultValue={this.state.OpenTime}
                                        onChange={this.handleOpenTime}/>
                                    </div>
                                  </div>
                                </Modal.Body>
                                  :
                                <Modal.Body>
                                <span className="mr-2">Winning no:</span>
                                <select name='winningNumber' className="p-1" style={{borderRadius:'7px',outline:'none'}} onChange={this.handleChange}>
                                  {
                                    this.state.brr.map(i=><option>{i}</option>)
                                  }
                                </select>
                                </Modal.Body>
                              }
                              <Modal.Footer className="justify-content-center bg-dark">
                              <button className="btn btn-info" onClick={this.state.eventFlag ? ()=>this.handleSubmit("Add Event") : ()=>this.handleSubmit("Result Settlement")}>Submit</button>
                              </Modal.Footer>
                            </Modal>

            {
            // Modal for ADD AGENT
            }

            <Modal show={this.state.agentModal} onHide={() => {this.handleClose("AddAgent")}}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ paddingLeft: "175px" }}>
                    <span style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
                        Add Agent
                    </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body mx-3">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }}>
                                        Name
                                    </label>
                                    
                                    <input type="email"id="defaultForm-email" name="Name" onChange={this.handleChange} className="form-control validate" placeholder="name"/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                                        User ID
                                    </label>
                                    
                                    <input onChange={this.handleChange} type="email" id="defaultForm-email" name="userName" className="form-control validate" placeholder="User ID" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                                        Commission
                                    </label>
                                    <input onChange={this.handleChange} type="email" id="defaultForm-email" name="Commission" className="form-control validate" placeholder="Commission" />
                                </div>
                            </div>

                            {
                            //   <div className="col-lg-6 col-sm-6 col-xs-6">
                            //     <div className="md-form mb-4">
                            //         <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                            //             Date
                            //         </label>
                            //         <input onChange={this.handleChange} type="date" id="defaultForm-email" name="Date" className="form-control validate" placeholder="Date" />
                            //     </div>
                            // </div>
                            
                        // <div className="row">
                      }
                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                                        Password
                                    </label>
                                    <input onChange={this.handleChange} type="password" id="defaultForm-email" name="password" className="form-control validate" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                      </div>
                   { 
                     //</div>
                  }
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <button className="btn btn-md btn-success" onClick={this.handleAddUser} >
                        Add
                    </button>
                    <button type="reset" className="btn btn-md btn-secondary">
                        Reset
                    </button>
                </Modal.Footer>
            </Modal>

            {
            // Modal for free chip DEPOSIT and WITHDRAWL
            }

            <Modal show={this.state.depositModal} onHide={() => {this.handleClose("Deposit") }} >
                <Modal.Header closeButton>
                    <Modal.Title className="ml-4">Free Chip {this.state.chipFlag ? "Withdrawl" : "Deposit"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div>
                        <label className="ml-4"> 
                            Free Chips: 
                            <input className="form-control w-100" name="freeChips" onChange={this.handleChange} autoComplete="off"/>
                        </label>
                    </div>
                    <div>
                        <label className="ml-4"> 
                            WalletBalance: 
                            <input className="form-control w-100" disabled name="freeChips" onChange={this.handleChange} value={this.state.updatedChips} />
                        </label>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: "center" }}>
                    <button className="btn btn-dark" onClick={() => {this.handleUpdateChip(this.state.id, this.state.chipFlag) }}>
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
}
