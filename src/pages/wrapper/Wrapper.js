import React from "react"
import PersonalInfo from "../personalInfo/PersonalInfo"
import SelectYourPlan from "../selectYourplan/SelectYourPlan"
import PickAddOns from "../pickAddons/PickAddOns"
import Summary from "../finish/Summary"
import {Route, Routes} from "react-router-dom"
import Confirm from "../confirm/Confirm"
const Wrapper = () => {
  const routes = [
    {
      path:"/",
      main:() => <PersonalInfo/>
    },
    {
      path:"/select-plan",
      main:() => <SelectYourPlan/>
    },
    {
      path:"/add-ons",
      main:() => <PickAddOns/>
    },
    {
      path:"/summary",
      main:() => <Summary/>
    },
    {
      path:"/confirm",
      main:() => <Confirm/>
    }
  ]
  return (
    <div className="wrapper">
     <div className="form-tab-wrapper">
        <Routes>
         {routes.map(({path}) => (
           <Route key={path} path={path} />
         ))
         }
       </Routes>
     </div>
     <Routes>
      {routes.map(({path, main}) => (
        <Route key={path} path={path} element={main()} />
       ))}
     </Routes>
    </div>
  )
}

export default Wrapper