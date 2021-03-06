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
      winningNumber:'1',
      ResultDate:new Date(),
      ResultTime:new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").substring(0,5),
      OpenDate:new Date(),
      OpenTime:new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").substring(0,5),
      resultSettlement:false,
      userID:'',
      successfulMsg:'',
      emptyMsg:'',
      reqID:'',
      reqComm:'',
      reqPwd:'',
      brr:[1,2,3,4,5,6,7,8,9,10]
    };
  }

  async componentDidMount() {
    // let hour = new Date().getHours()
    // let min = new Date().getMinutes()
    let time=new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1").substring(0,5);
    await this.setState({
      ResultTime:time,
      OpenTime:time
    })
    this.getAgentList();
    // console.log("rd",this.state.ResultDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10),
    // "od",this.state.OpenDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10),
    // "ot",this.state.OpenTime,
    // "rt",this.state.ResultTime)
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
        chipFlag: false,
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

  hasNumber = (num) => {
    return /\d/.test(num)
  }

  lowerCaseLetters=(char)=>{
    var lowerCaseLetters = /[a-z]/g;
    if(char.match(lowerCaseLetters)){
      return false
    }
    else{
      return true
    }
  }
  
  upperCaseLetters=(char)=>{
    // debugger
    let upperCaseLetters = /[A-Z]/g;
    if(char.match(upperCaseLetters)){
      return false
    }
    else{
      return true
    }
  }

  agentValidation = async () => {
    // debugger
   if(this.state.Name===""){
    await this.setState({
      reqMsg:'This fields is required !',
      naam:false
    })
   }else{
    await this.setState({
      naam:true
    })
   }

   let num = this.hasNumber(this.state.userName)
    if(this.state.userName!==""){
      if(this.state.userName.length>=8 && num)
      {
        let char = this.state.userName[0]
        let chL = this.lowerCaseLetters(char);
        let chU = this.upperCaseLetters(char);
        if(chU && chL){
        // if(char<65 || char>90 || char<97 || char>122){
          await this.setState({
            reqID:'Userid must have 1st letter alphabet',
            userNaam:false
          })
        }else{
          await this.setState({
            userNaam:true
          })
        }
      }
      else
      {
        await this.setState({
          reqID:'Userid must have 8 characters & alpha-numeric',
          userNaam:false
        })
      }
    }
    else{
      await this.setState({
        reqID:'This fields is required !',
        userNaam:false
      })
    }

    if(this.state.Commission!==""){
      if(parseInt(this.state.Commission)<1 && parseInt(this.state.Commission)>100){
        await this.setState({
          reqComm:'This must be b/w 1 & 100.',
          comm:false
        })
      }else if(parseInt(this.state.Commission)>=1 && parseInt(this.state.Commission)<=100){
        await this.setState({
          comm:true
        })
      }
      else{
        await this.setState({
          reqComm:'You have entered wrong number !',
          comm:false
        })
      }
    }
    else{
      await this.setState({
        reqComm:'This fields is required !',
        comm:false
      })
    }

  // debugger
    if(this.state.password!=="" && this.state.password.length>=8){
      let char = this.state.password[0]
      // let chL = this.lowerCaseLetters(char);
      let chU = this.upperCaseLetters(char);
      if(chU){
        await this.setState({
          reqPwd:'1st letter capital & length must be 8',
          pwd:false
        })
      }else{
        await this.setState({
          pwd:true
        })
      }
    }
    else{
      await this.setState({
        reqPwd:'This fields is required !',
        pwd:false
      })
    }

    if(this.state.naam && this.state.userNaam && this.state.comm && this.state.pwd){
      return true
    }else{
      return false
    }
  }

  handleAddUser = async (event) => {
    event.preventDefault();
    let permit = await this.agentValidation()
    if(permit===true){
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
      await this.handleClose("AddAgent");
    }
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
    console.log(obj)
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
      const obj = {
        resultDate:this.state.ResultDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10),
        openDate:this.state.OpenDate.toLocaleString('en-GB', { timeZone: 'UTC' }).substring(0,10),
        openTime:this.state.OpenTime,
        resultTime:this.state.ResultTime
      }
      POST("updateResult",obj)
      .then(res=>{
        console.log("ur",res)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    else if(apiType==="Result Settlement"){
      const obj = {
        winningNo:this.state.winningNumber
      }
      POST("settleTickets",obj)
      .then(res=>{
        this.setState({
          successfulMsg:res.data.message
        })
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }


  render() {
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                          <div className="float-right p-2">
                            <button className="btn btn-admin btn-danger m-1 mr-1" style={{}} onClick={this.handleDelete}>
                                <i className="fa fa-trash mr-2"/>
                                DELETE AGENT
                            </button>
                            <button className="btn btn-admin btn-dark m-1 mr-1" onClick={this.handleBlock}>
                                <i className="fa fa-ban text-danger mr-2" />
                                BLOCK / UNBLOCK
                            </button>
                            <button className="btn btn-admin btn-success m-1 mr-1" onClick={() => this.handleShow("AddAgent")}>
                                <i className="fas fa-plus mr-2" />
                                ADD AGENT
                            </button>
                            <button 
                              className="btn btn-admin btn-dark m-1 mr-1" 
                              onClick={() => this.handleShow("Result Settlement")}>
                              <i className="fas fa-poll mr-2 mt-1" />
                              Result Settlement
                            </button>                  
                            <button 
                              className="btn btn-admin btn-dark m-1 mr-1 " 
                              onClick={() => this.handleShow("AddEvent")}>
                              <i className="fas fa-plus mr-2" />
                                Add Event
                            </button>    
                          </div> 
                            {
                              // <span className="mr-2">Result Date:</span>                
                              // <DatePicker selected={this.state.resultDate} onChange={(date)=>this.handleDatepicker(date)}/><br/>
                            }

                            <div className="table-responsive m-b-30">
                                <table className="table table-bordered table-striped table-earning table-hover">
                                    <thead >
                                        <tr>
                                        <th className="">S.No.</th>
                                        <th className="">Agent&nbsp;ID</th>
                                        <th className="">Website</th>
                                        <th className="">commission</th>
                                        <th className="">Credit&nbsp;Limit</th>
                                        <th className="">View More</th>
                                        </tr>
                                    </thead>
                                        {
                                          (this.state.agentInfo.length <= 0) ? <div className="justify-content-center">Empty !</div> :
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
                                                          {ele.blocked ? (<i className="fas fa-ban text-danger" />) : null}
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
                              <Modal.Header closeButton className="">
                                <Modal.Title>{this.state.eventFlag ? "Add Event" : "Result Settlement"}</Modal.Title><br/>
                                </Modal.Header>
                                <div>{this.state.successfulMsg ? <h6 className="ml-2 text-success">{this.state.successfulMsg}</h6> : null}</div>
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
                              <Modal.Footer className="justify-content-center">
                              <button className="btn btn-info" onClick={this.state.eventFlag ? ()=>this.handleSubmit("Add Event") : ()=>this.handleSubmit("Result Settlement")}>Submit</button>
                              </Modal.Footer>
                            </Modal>

            {
            // Modal for ADD AGENT
            }

            <Modal show={this.state.agentModal} onHide={() => {this.handleClose("AddAgent")}}>
            <form>
                <Modal.Header closeButton>
                    <Modal.Title>
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
                                        Name*
                                    </label>
                                    
                                    <input type="text"  name="Name" onChange={this.handleChange} className="form-control" autoComplete="off" placeholder="name"/>
                                    <span style={{fontSize:'10px',color:'red'}}>{this.state.reqMsg ? "*"+this.state.reqMsg+"*" : null }</span>
                                  </div>
                                </div>
            

                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                                        User ID*
                                    </label>
                                    <input onChange={this.handleChange} type="text"  name="userName" className="form-control" autoComplete="off" placeholder="User ID" />
                                    <span style={{fontSize:'10px',color:'red'}}>{this.state.reqID ? "*"+this.state.reqID+"*" : null }</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                                        Commission(%)*
                                    </label>
                                    <input onChange={this.handleChange} type="text"  name="Commission" className="form-control" autoComplete="off" placeholder="In percentage" />
                                    <span style={{fontSize:'10px',color:'red'}}>{this.state.reqComm ? "*"+this.state.reqComm+"*" : null }</span>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-xs-6">
                                <div className="md-form mb-4">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email" style={{ color: "black" }} >
                                        Password*
                                    </label>
                                    <input onChange={this.handleChange} type="text"  name="password" className="form-control validate" autoComplete="off" placeholder="Password" />
                                    <span style={{fontSize:'10px',color:'red'}}>{this.state.reqPwd ? "*"+this.state.reqPwd+"*" : null }</span>
                                </div>
                            </div>
                        </div>
                      </div>
                </Modal.Body>

                <Modal.Footer style={{ justifyContent: "center" }}>
                    <button type="submit" className="btn btn-md btn-success" onClick={this.handleAddUser} >
                      Add
                    </button>
                    <button type="reset" className="btn btn-md btn-secondary">
                      Reset
                    </button>
                </Modal.Footer>
                </form>
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
                            <input className="form-control" style={{width:'200%'}} name="freeChips" onChange={this.handleChange} autoComplete="off"/>
                        </label>
                    </div>
                    <div>
                        <label className="ml-4"> 
                            WalletBalance: 
                            <input className="form-control" style={{width:'200%'}} disabled name="freeChips" onChange={this.handleChange} value={this.state.updatedChips} />
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
