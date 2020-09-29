import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>I'm Roopesh, a full stack developer living in Ireland.</h2>
      <p>Working with multiple pages...</p>
      <p>Need a Developer? <a href="/contact">Contact Me</a> "this is using anchor html element"</p>
      <p>Need a Developer? <Link to="/contact">Contact Me.</Link>"this is using the Link component. this component pre-loads the the pages the user might me heading to."</p>
    </div>
  )
}

export default IndexPage