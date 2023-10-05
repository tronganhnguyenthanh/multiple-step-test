import React from "react"
import Step from "../../images/Bg.png"
import BgMobile from "../../images/bg-mobile.png"
import Circle1 from "../../images/circle1.png"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import MediaQuery from "react-responsive"
const SidebarStep = () => {
    return (
        <Nav variant="pills" className="ml-2">
            <Nav.Item>
                <Link to="/">
                    <MediaQuery minWidth={1200}>
                      <div className="left-sidebar-wrapper p-2">
                        <img src={Step} alt="" />
                      </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={576}>
                      <img src={BgMobile} alt="" />
                    </MediaQuery>
                    <div className="step-timeline">
                        <img src={Circle1} alt="" />
                        <p className="number">1</p>
                    </div>
                    <div className="step-one">Step 1</div>
                    <div className="step-one-info">Your info</div>
                </Link>
                <Link to="/select-plan">
                    <div className="step-timeline-two">
                        <img src={Circle1} alt="" />
                        <p className="number-two">2</p>
                    </div>
                    <div className="step-two">Step 2</div>
                    <div className="step-two-select-plan">select plan</div>
                </Link>
                <Link to="/add-ons">
                    <div className="step-timeline-three">
                        <img src={Circle1} alt="" />
                        <p className="number-three">3</p>
                    </div>
                    <div className="step-three">Step 3</div>
                    <div className="step-three-addons">add-ons</div>
                </Link>
                <Link to="/summary">
                    <div className="step-timeline-four">
                        <img
                            src={Circle1}
                            alt=""
                        />
                        <p className="number-four">4</p>
                    </div>
                    <div className="step-four">Step 4</div>
                    <div className="step-four-summary">summary</div>
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default SidebarStep