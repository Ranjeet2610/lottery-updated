import React, { Component, createRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { POST } from "../../Services/Api";

export default class Lottery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      num7: 0,
      num8: 0,
      num9: 0,
      num10: 0,
      indx: null,
      bgColor: "#007bff",
      agentName: "",
      agentId: "",
      ticketList: [],
      totalAmount: 0,
      disable: true,
      brr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    this.textInput = createRef();
  }

  componentDidMount() {
    var userName1 = JSON.parse(localStorage.getItem("user"));
    this.setState({
      agentId: userName1.data.userName,
      agentName: userName1.data.Name,
    });
    const obj = {
      agentId: userName1.data.userName,
    };
    POST("getTicketsByuser", obj)
      .then((res) => {
        this.setState({
          ticketList: res.data.Data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: parseInt(event.target.value) || 0,
      },
      () => {
        this.setState({
          totalAmount:
            this.state.num1 +
            this.state.num2 +
            this.state.num3 +
            this.state.num4 +
            this.state.num5 +
            this.state.num6 +
            this.state.num7 +
            this.state.num8 +
            this.state.num9 +
            this.state.num10,
        });
      }
    );
  };

  handleSubmit = () => {
    const obj = {
      one: this.state.num1,
      two: this.state.num2,
      three: this.state.num3,
      four: this.state.num4,
      five: this.state.num5,
      six: this.state.num6,
      seven: this.state.num7,
      eight: this.state.num8,
      nine: this.state.num9,
      ten: this.state.num10,
      agentName: this.state.agentName,
      agentId: this.state.agentId,
      totalAmount: this.state.totalAmount,
    }
    POST("generateTicket", obj, { headerStatus: true })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
    this.handleClose();
  };

  handleNumberInputLink = async (index) => {
    this.setState(
      {
        Style: {
          color: "white",
          backgroundColor: "green",
        },
        indx: index,
      },
      async () => {
        await this.textInput.current.focus();
      }
    );
  };

  printFunc = () => {
      this.props.history.push('/lotteryticket')
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeLink>
            <Modal.Title style={{ paddingLeft: "155px" }}>
              <span style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
                Create Ticket
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4 className="pt-3" style={{ color: "black" }}>
              Numbers
            </h4>

            <div className="form-group row mx-1">
              {this.state.brr.map((item, index) => {
                return (
                  <div className="col-xs-1 ml-2 my-2">
                    <Link
                      style={
                        this.state.indx === index ? this.state.Style : null
                      }
                      onClick={() => this.handleNumberInputLink(index)}
                      className="btn btn-primary btn-lg my-1 ml-3"
                    >
                      {item}
                    </Link>
                    <input
                      name={`num${item}`}
                      ref={this.state.indx === index ? this.textInput : null}
                      onBlur={this.handleChange}
                      disabled={this.state.indx !== index}
                      className="form-control"
                      type="text"
                      size="2"
                    />
                  </div>
                );
              })}
            </div>

            <div className="modal-body mx-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="defaultForm-email"
                        style={{ color: "black" }}
                      >
                        Total Amount:
                      </label>
                      <input
                        type="text"
                        disabled
                        id="defaultForm-email"
                        className="form-control validate"
                        value={this.state.totalAmount}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="defaultForm-email"
                        style={{ color: "black" }}
                      >
                        Result Date:
                      </label>
                      <input
                        name="agentName"
                        disabled
                        onChange={this.handleChange}
                        type="text"
                        id="defaultForm-email"
                        className="form-control validate"
                        placeholder="Result Date"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="defaultForm-email"
                        style={{ color: "black" }}
                      >
                        Agent ID:
                      </label>
                      <input
                        name="agentId"
                        disabled
                        onChange={this.handleChange}
                        type="text"
                        id="defaultForm-email"
                        className="form-control validate"
                        placeholder={this.state.agentId}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <div className="md-form mb-4">
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="defaultForm-email"
                        style={{ color: "black" }}
                      >
                        Agent Name:
                      </label>
                      <input
                        name="agentName"
                        disabled
                        onChange={this.handleChange}
                        type="text"
                        id="defaultForm-email"
                        className="form-control validate"
                        placeholder={this.state.agentName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer style={{ justifyContent: "center" }}>
            <Link
              type="Link"
              className="btn btn-md btn-success"
              onClick={this.handleSubmit}
            >
              Submit
            </Link>
            <Link type="reset" className="btn btn-md btn-secondary">
              Reset
            </Link>
          </Modal.Footer>
        </Modal>

        <div className="main-content">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <Link
                    className="btn btn-agent btn-primary float-right mb-4 mr-3"
                    onClick={this.handleShow}
                  >
                    <i className="fas fa-plus"></i> CREATE A TICKET
                  </Link>

                  <div className="table-responsive table--no-card m-b-30">
                    <table className="table table-bordered table-striped table-earning">
                      <thead>
                        <tr className="text-center">
                          <th>S.No.</th>
                          <th>number</th>
                          <th>ticket amount</th>
                          <th>draw number</th>
                          <th>date & time</th>
                          <th>print</th>
                        </tr>
                      </thead>
                      {this.state.ticketList.map((ele, index) => {
                        return (
                          <tbody>
                            <tr>
                              <td className="align-middle">{index + 1}</td>
                              <td className="align-middle">{ele.agentId}</td>
                              <td className="align-middle">
                                {ele.totalAmount}
                              </td>
                              <td className="align-middle">{ele._id}</td>
                              <td className="align-middle">{ele.createdAt}</td>
                              <td className="align-middle">
                                <div>
                                  <Link
                                    to={
                                      {
                                        pathname:'/printticket', 
                                        state:{
                                          data:{ele}
                                        }
                                      }
                                    }
                                    className="btn btn-success mr-1"
                                    style={{ width: "100px" }}
                                  >
                                    View
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
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
        </div>
      </div>
    );
  }
}
