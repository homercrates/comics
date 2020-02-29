import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { graphql } from "gatsby"

import Header from "../../components/header"
import Layout from "../layout"

export default ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          color: `purple`,
        }}
      ></div>
      <div>
        <br />
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Nicks Various Series
        </h1>
        <h4>Click a Series to read</h4>
        <div>
          {data.allMarkdownRemark.nodes
            .filter(ech => ech.frontmatter.episode === 1)
            .map(({ frontmatter }) => (
              <div key={"nodes.id"}>
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    {" "}
                    - {frontmatter.date}
                  </span>
                </h3>
                <Header
                  title={frontmatter.title}
                  episode={frontmatter.episode}
                  imgLink={frontmatter.imgLink}
                  series={frontmatter.series}
                  totalCount={data.allMarkdownRemark.totalCount}
                  author={data.allMarkdownRemark.author}
                  to={frontmatter.series}
                />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Nick {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: [DESC, ASC] }
      filter: { frontmatter: { author: { eq: "Nick" } } }
    ) {
      nodes {
        id
        frontmatter {
          author
          date
          episode
          imgLink
          series
          title
        }
        excerpt
      }
    }
  }
`
