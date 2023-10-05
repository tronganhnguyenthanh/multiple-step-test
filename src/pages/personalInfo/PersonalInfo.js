import React, {useState} from "react"
import {Button, Col, Form, Row} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SidebarStep from "../sidebar/SidebarStep"
const PersonalInfo = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const goNext = () => {
    if (name === "") {
      toast.error("Please enter your name", { position: "top-center" })
      return false
    } else if (email === "") {
      toast.error("Please enter your email", { position: "top-center" })
      return false
    } else if (phoneNumber === "") {
      toast.error("Please enter your phone number", { position: "top-center" })
      return false
    } else {
      navigate("/select-plan")
      return true
    }
  }
  return (
    <>
      <ToastContainer />
      <Row>
        <Col lg="6">
          {/* <Nav variant="pills">
            <Nav.Item>
              <Nav.Link>
                <div className="left-sidebar-wrapper">
                  <img src={Step} alt="" />
                </div>
                <div className="step-timeline">
                  <img src={Circle1} alt="" />
                  <p className="number">1</p>
                </div>
                <div className="step-one">Step 1</div>
                <div className="step-one-info">Your info</div>
              </Nav.Link>
              <Nav.Link>
                <div className="step-timeline-two">
                  <img src={Circle1} alt="" />
                  <p className="number-two">2</p>
                </div>
                <div className="step-two">Step 2</div>
                <div className="step-two-select-plan">select plan</div>
              </Nav.Link>
              <Nav.Link>
                <div className="step-timeline-three">
                  <img src={Circle1} alt="" />
                  <p className="number-three">3</p>
                </div>
                <div className="step-three">Step 3</div>
                <div className="step-three-addons">add-ons</div>
              </Nav.Link>
              <Nav.Link>
                <div className="step-timeline-four">
                  <img
                    src={Circle1}
                    alt=""
                  />
                  <p className="number-four">4</p>
                </div>
                <div className="step-four">Step 4</div>
                <div className="step-four-summary">summary</div>
              </Nav.Link>
            </Nav.Item> */}
            <SidebarStep/>
          {/* </Nav> */}
        </Col>
        <Col lg="6">
          <div className="personal-info-wrapper">
            <h2>Personal Info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label className="form-custom-label">Name</Form.Label>
                <Form.Control
                  className="form-custom-control"
                  placeholder="e.g. Stephen King"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="form-custom-label">Email Address</Form.Label>
                <Form.Control
                  className="form-custom-control"
                  placeholder="e.g.stephenking@lorem.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="form-custom-label">Phone Number</Form.Label>
                <Form.Control
                  className="form-custom-control"
                  placeholder="e.g. +1 234 567 890"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2 d-flex button-margin">
                <Button type="button" className="btn-next-step" onClick={goNext}>
                  <Link className="text-white text-decoration-none">Next Step</Link>
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default PersonalInfo