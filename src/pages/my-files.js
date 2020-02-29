import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Files</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>relative path</th>
              <th>size</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>Birth time</th>
              <th>RElative Directory</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.id}</td>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
                <td>{node.relativeDirectory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          relativePath
          size
          prettySize
          extension
          birthTime(fromNow: true)
          relativeDirectory
        }
      }
    }
  }
`
