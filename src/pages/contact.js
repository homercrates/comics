import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "./layout"

export default () => (
  <div style={{ color: `teal` }}>
    <Layout>
      <Link to="/">Home</Link>
      <Header title={"Contact"} text={"contact soon: temporarily disabled"} />
      <p>Send us a message!</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  </div>
)
