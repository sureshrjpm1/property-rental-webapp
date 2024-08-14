import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react'
import { Row, Col, Label, Input, Form, FormGroup, Button, Table } from 'reactstrap'
import Select from 'react-select'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'

import userIcon from '../../assets/icons/user.svg'
import callIcon from '../../assets/icons/telephone.png'
import waterIcon from '../../assets/icons/water.svg'
import elecricityIcon from '../../assets/icons/flash.svg'

const options = [
  { value: '101', label: 'Apartment 1' },
  { value: '102', label: 'Apartment 2' },
  { value: '103', label: 'Apartment 3' },
]

const Payments = () => {
  const defaultStartDate = new Date()
  const [startDate, setStartDate] = useState(defaultStartDate)
  const [endDate, setEndDate] = useState(defaultStartDate)

  const handleChange = ([newStartDate, newEndDate]) => {
    setStartDate(newStartDate)
    setEndDate(newEndDate)
  }

  return (
    <>
      <CContainer fluid>
        <CRow>
          <CCol>
            <CCard>
              <CCardBody>
                <Form>
                  <Row className="row g-3 align-items-center">
                    <Col sm="4" xs="12">
                      <FormGroup>
                        <Label for="exampleEmail">Apartment Name</Label>
                        <Select options={options} />
                      </FormGroup>
                    </Col>
                    <Col sm="4" xs="12">
                      <FormGroup>
                        <Label for="exampleEmail">Date Range</Label>
                        <DatePicker
                          selected={startDate}
                          startDate={startDate}
                          endDate={endDate}
                          onChange={handleChange}
                          className="form-control"
                          dateFormat="MMM/yyyy"
                          placeholderText="Select a month other than the disabled months"
                          showMonthYearPicker
                          selectsRange
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="3" xs="12">
                      <FormGroup>
                        <Button color="primary" className="btn btn-primary mt-4 px-5 w-100">
                          Search
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow className="mt-2">
          <CCol>
            <CCard className="data-card">
              <CCardBody className="data-card-body">
                <div className="container payment-table-container">
                  <div className="table-wrapper">
                    <Table className="table table-fixed-header table-borderless">
                      <thead className="thead-light">
                        <tr>
                          <th className="apt-header">Apartment Name</th>
                          <th className="month-header">Jan 2024</th>
                          <th className="month-header">Feb 2024</th>
                          <th className="month-header">Mar 2024</th>
                          <th className="month-header">Apr 2024</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="apt-detail-container">
                              <p className="apt-name mb-2">
                                <strong> Apartment #1</strong>
                              </p>
                              <p className="p-detail mb-2">
                                <img src={userIcon} alt="My Icon" />
                                <span className="cil-user"></span>Suresh G
                              </p>
                              <p className="p-detail mb-2 pb-2">
                                <img src={callIcon} alt="My Icon" />
                                34613562
                              </p>
                              <div className="row card-body-sec">
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={waterIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Water Acct#</p>
                                      <h6 className="mb-0">150</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={elecricityIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Electric Acct#</p>
                                      <h6 className="mb-0">85</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="apt-detail-container">
                              <p className="apt-name mb-2">
                                <strong> Apartment #2</strong>
                              </p>
                              <p className="p-detail mb-2">
                                <img src={userIcon} alt="My Icon" />
                                <span className="cil-user"></span>Suresh G
                              </p>
                              <p className="p-detail mb-2 pb-2">
                                <img src={callIcon} alt="My Icon" />
                                34613562
                              </p>
                              <div className="row card-body-sec">
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={waterIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Water Acct#</p>
                                      <h6 className="mb-0">150</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={elecricityIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Electric Acct#</p>
                                      <h6 className="mb-0">85</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="apt-detail-container">
                              <p className="apt-name mb-2">
                                <strong> Apartment #3</strong>
                              </p>
                              <p className="p-detail mb-2">
                                <img src={userIcon} alt="My Icon" />
                                <span className="cil-user"></span>Suresh G
                              </p>
                              <p className="p-detail mb-2 pb-2">
                                <img src={callIcon} alt="My Icon" />
                                34613562
                              </p>
                              <div className="row card-body-sec">
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={waterIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Water Acct#</p>
                                      <h6 className="mb-0">150</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={elecricityIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Electric Acct#</p>
                                      <h6 className="mb-0">85</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="apt-detail-container">
                              <p className="apt-name mb-2">
                                <strong> Apartment #4</strong>
                              </p>
                              <p className="p-detail mb-2">
                                <img src={userIcon} alt="My Icon" />
                                <span className="cil-user"></span>Suresh G
                              </p>
                              <p className="p-detail mb-2 pb-2">
                                <img src={callIcon} alt="My Icon" />
                                34613562
                              </p>
                              <div className="row card-body-sec">
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={waterIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Water Acct#</p>
                                      <h6 className="mb-0">150</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={elecricityIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Electric Acct#</p>
                                      <h6 className="mb-0">85</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="apt-detail-container">
                              <p className="apt-name mb-2">
                                <strong> Apartment #5</strong>
                              </p>
                              <p className="p-detail mb-2">
                                <img src={userIcon} alt="My Icon" />
                                <span className="cil-user"></span>Suresh G
                              </p>
                              <p className="p-detail mb-2 pb-2">
                                <img src={callIcon} alt="My Icon" />
                                34613562
                              </p>
                              <div className="row card-body-sec">
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={waterIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Water Acct#</p>
                                      <h6 className="mb-0">150</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={elecricityIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Electric Acct#</p>
                                      <h6 className="mb-0">85</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="apt-detail-container">
                              <p className="apt-name mb-2">
                                <strong> Apartment #6</strong>
                              </p>
                              <p className="p-detail mb-2">
                                <img src={userIcon} alt="My Icon" />
                                <span className="cil-user"></span>Suresh G
                              </p>
                              <p className="p-detail mb-2 pb-2">
                                <img src={callIcon} alt="My Icon" />
                                34613562
                              </p>
                              <div className="row card-body-sec">
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={waterIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Water Acct#</p>
                                      <h6 className="mb-0">150</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="d-flex align-items-center p-0 p-detail">
                                    <img src={elecricityIcon} alt="My Icon" />
                                    <div className="ms-1">
                                      <p className="text-muted mb-0">Electric Acct#</p>
                                      <h6 className="mb-0">85</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="row data-sec-container">
                              <div className="rent-sec">
                                <p>Total Rent</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Amount Paid</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <div className="rent-sec">
                                <p>Balance</p>
                                <p>
                                  <strong> $ 2000.00</strong>
                                </p>
                              </div>
                              <Button color="primary" className="btn btn-primary mt-2 px-5 w-100">
                                Pay Rent
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Payments
