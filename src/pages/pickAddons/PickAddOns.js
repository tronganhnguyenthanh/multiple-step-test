import React, {useState} from "react"
import {Button, Col, Row} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import SidebarStep from "../sidebar/SidebarStep"
const PickAddOns = () => {
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const handleCheck = () => {
    if(checked) {
     setChecked(!checked)
     navigate("/summary")
    }
  }
  const onlineService = 9
  const largerStorage = 2
  localStorage.setItem("onlineService", onlineService)
  localStorage.setItem("largerStore", largerStorage)
  return (
    <Row>
      <Col lg="6">
        <SidebarStep />
      </Col>
      <Col lg="6">
        <div className="personal-info-wrapper">
          <h2>Pick add-ons</h2>
          <p>Add-ons help enhance your gaming experience.</p>
          {!checked ? <p className="text-danger">Please choose your add-ons</p> : ""}
          <div className="add-ons-service">
            <div className="service p-2">
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <h3>Online service</h3>
              <p className="multiplayer">Access to multiplayer games.</p>
              <span className="price">+${onlineService}/mo</span>
            </div>
          </div>
          <div className="add-ons-service mt-2">
            <div className="service p-2">
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save.</p>
              <span className="price-two">+${largerStorage}/mo</span>
            </div>
          </div>
          <div className="add-ons-service mt-2">
            <div className="service p-2">
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <h3>Customizable Profile</h3>
              <p className="customizable-profile">Custom theme on your profile.</p>
              <span className="price-three">+{largerStorage}/mo</span>
            </div>
          </div>
          <div className="btn-group-pick-addons">
            <Link className="btn-go-back" to="/select-plan">
              Go back
            </Link>
            <Button className="btn-next-step" onClick={handleCheck}>
              Next Step
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default PickAddOns