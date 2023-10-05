import React, { useState } from "react"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import ReactSwitch from "react-switch"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import SidebarStep from "../sidebar/SidebarStep"
const SelectYourPlan = () => {
  const [checked, setChecked] = useState(false)
  const arCade = 9
  localStorage.setItem("arcade", arCade)
  const adVanced = 12
  localStorage.setItem("advanced", adVanced)
  const pro = 15
  const handleCheck = () => {
   setChecked(!checked)
  }
  const navigate = useNavigate()
  const goNext = () => {
   if(checked){
    navigate("/add-ons")
   }
  }
  return (
    <>
      <Row>
        <Col lg="6">
          <SidebarStep/>
        </Col>
        <Col lg="6">
          <div className="select-plan-wrapper">
            <h2>Select your plan</h2>
            <p>You have the opinion of monthly and yearly billing.</p>
            {!checked ? <p className="text-danger">Please choose your select plan</p>:""}
            <div className="select-icon-plan">
              <div className="square">
                <img
                  src={icon1}
                  className="icon-arcade"
                  alt=""
                />
                <h3>Arcade</h3>
                <p>${arCade}/month</p>
                <Form.Check 
                  className="d-flex justify-content-center custom-plan"
                  value={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </div>
              <div className="square">
                <img
                  src={icon2}
                  className="icon-arcade"
                  alt=""
                />
                <h3>Advanced</h3>
                <p>${adVanced}/month</p>
                <Form.Check 
                  className="d-flex justify-content-center custom-plan"
                  value={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </div>
              <div className="square">
                <img
                  src={icon3}
                  className="icon-arcade"
                  alt=""
                />
                <h3>Pro</h3>
                <p>${pro}/mo</p>
                <Form.Check 
                  className="d-flex justify-content-center custom-plan"
                  value={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </div>
            </div>
            <div className="choose-payment">
              {checked ? <h3>Yearly</h3>:  <h3>Monthly</h3>}
              <ReactSwitch
                className="switch-margin"
                onChange={handleCheck}
                checked={checked}
              />
            </div>
            <div className="btn-group-select-plan">
              <Link className="btn-go-back" to="/">
                Go back
              </Link>
              <Button className="btn-next-step" onClick={goNext}>
                <Link className="text-white text-decoration-none">Next Step</Link>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SelectYourPlan