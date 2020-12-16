import React, { Component } from "react";
import { Tab, Row, Col, Nav, Form, Table } from "react-bootstrap";
import { connect } from "react-redux";
import Header from "../layout/Header";
import { userGetInfoAction } from "../../redux/UserAction";
import { getOrderAction } from "../../redux/OrderAction";

class Account extends Component {
  async componentDidMount() {
    await this.props.userGetInfoAction();
    if (this.props.userInfo) this.props.getOrderAction();
    else window.location = "/sign-in";
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.userInfo ? (
            <>
              <Tab.Container defaultActiveKey="first">
                <Row className="vh-100">
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column w-50">
                      <span>
                        <img src="/img/account.png" alt="account" width="50" />
                      </span>
                      <hr class="dropdown-divider" />
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <i class="fas fa-address-card"></i> info
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <i className="fas fa-store-alt"></i> order
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Form>
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder={
                                  this.props.userInfo
                                    ? this.props.userInfo.email
                                    : ""
                                }
                                disabled
                              />
                            </Form.Group>
                          </Form.Row>

                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              placeholder={this.props.userInfo.address}
                              disabled
                            />
                          </Form.Group>

                          <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control
                              placeholder={this.props.address2}
                              disabled
                            />
                          </Form.Group>

                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                              <Form.Label>City</Form.Label>
                              <Form.Control
                                disabled
                                placeholder={this.props.userInfo.city}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                              <Form.Label>State</Form.Label>
                              <Form.Control
                                disabled
                                placeholder={this.props.userInfo.state}
                              />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                              <Form.Label>Zip</Form.Label>
                              <Form.Control
                                disabled
                                placeholder={this.props.userInfo.zip}
                              />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className="text-center">
                        {this.props.associatedOrder ? (
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>Order#</th>
                                <th>Name</th>
                                <th>Purchase</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.props.associatedOrder.map((order) => (
                                <tr>
                                  <td>{order.oid}</td>
                                  <td>
                                    {order.firstName} {order.lastName}
                                  </td>
                                  <td>
                                    {order.cartItems.map((item) => (
                                      <li className="nav-link">{item.title}</li>
                                    ))}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        ) : (
                          <div>No order history</div>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userInfo: state.user.userInfo,
    associatedOrder: state.order.associatedOrder,
  }),
  { userGetInfoAction, getOrderAction }
)(Account);
