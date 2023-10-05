import React from "react"
import {Button, Col, Row} from "react-bootstrap"
import SidebarStep from "../sidebar/SidebarStep"
import {Link, useNavigate} from "react-router-dom"
const Summary = () => {
  const navigate = useNavigate()
  const arCarde = localStorage.getItem("arcade")
  const onlineService = localStorage.getItem("onlineService")
  const largerStorage = localStorage.getItem("largerStore")
  const goNext = () => {
   navigate("/confirm")
  }
  return (
    <Row>
      <Col lg="6">
        <SidebarStep/>
      </Col>
      <Col lg="6">
        <div className="personal-info-wrapper">
          <h2>Finising up</h2>
          <p>Double-check everything looks OK before confirming.</p>
          <div className="choose-payment p-2">
            <div className="finishing">
              <h3>Arcade (Monthly)</h3>
              <a href="#">Change</a>
              <span className="price-confirm">${arCarde}/mo</span>
              <div className="divider mt-2"></div>
              <p className="online-service">Online service</p>
              <span className="price-online-service mt-2">+${onlineService}/mo</span>
              <p className="online-service">Larger storage</p>
              <span className="larger-storage-service mt-2">+${largerStorage}/mo</span>
            </div>
          </div>
          <div className="total">
            Total(per month)
            <span className="price-result">
              ${parseInt(arCarde) + parseInt(onlineService) + parseInt(largerStorage)}/mo
            </span>
          </div>
          <div className="btn-group-summary">
            <Link className="btn-go-back" to="/add-ons">
               Go back
            </Link>
            <Button className="btn-next-step" onClick={goNext}>
              <p>Next Step</p>
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Summary