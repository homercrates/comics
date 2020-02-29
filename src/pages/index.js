import React from "react"

import { css } from "@emotion/core"

import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "./layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Comics
        </h1>
        {data.allMarkdownRemark.edges
          // only show episode 1 of each series
          .filter(ep1 => ep1.node.frontmatter.episode === 1)
          .map(({ node }) => (
            <div key={node.id}>
              <Header
                title={node.frontmatter.title}
                episode={node.frontmatter.episode}
                text={node.excerpt}
                imgLink={node.frontmatter.imgLink}
                series={node.frontmatter.series}
                date={node.frontmatter.date}
                to={node.frontmatter.series}
              />
            </div>
          ))}
      </div>
    </Layout>
  )
}

/*
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
          Mediocritis
        </h1>
        <h4>Nick's Mediocritis Series</h4>
        <div>
          {data.allMarkdownRemark.edges
            .filter(check => check.node.frontmatter.series === seriesVar)
            .map(({ node }) => (
              <div key={node.id}>
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    {" "}
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <Header
                  title={node.frontmatter.title}
                  episode={node.frontmatter.episode}
                  text={node.excerpt}
                  imgLink={node.frontmatter.imgLink}
                  series={node.frontmatter.series}
                />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}
*/
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            series
            episode
            imgLink
          }
          excerpt
        }
      }
    }
  }
`
