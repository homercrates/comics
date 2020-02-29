import React from "react"
import { graphql } from "gatsby"

import Layout from "../pages/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>
          Episode {post.frontmatter.episode}; Series {post.frontmatter.series}
        </p>
        <img src={post.frontmatter.imgLink} alt={""} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        series
        episode
        imgLink
      }
    }
  }
`
