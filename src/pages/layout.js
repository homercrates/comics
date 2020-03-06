import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const NavList = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <div>
      <Link to={props.to}>{props.children}</Link>
    </div>
  </li>
)

export default ({ children }) => {
  //Non-page components, such as Layout, can use StaticQuery. only pages can useStaticQuery
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      style={{
        margin: `1rem auto`,
        maxWidth: 850,
        padding: `0 3rem`,
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <div>
          <h3>{data.site.siteMetadata.title}</h3>
          <div>
            <ul style={{ listStyle: `none`, float: `right` }}>
              <NavList to="/">Home</NavList>{" "}
              <NavList to="/about-css-modules/">About</NavList>
              <NavList to="/contact/">Contact</NavList>
            </ul>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}
