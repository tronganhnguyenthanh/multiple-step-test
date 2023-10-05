import React from "react"
import {Row, Col} from "react-bootstrap"
import SidebarStep from "../sidebar/SidebarStep"
import checkbox from "../../images/checkbox.png"
const Confirm = () => {
  return (
   <Row>
     <Col lg="6">
       <SidebarStep/>
     </Col>
     <Col lg="6">
       <div className="confirm">
         <img src={checkbox} alt=""/>
         <h3>Thank you</h3>
         <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. 
          If you ever need support, please feel free to email us at support@loremgaming.com.
         </p>
       </div>
     </Col>
   </Row>
  )
}

export default Confirm