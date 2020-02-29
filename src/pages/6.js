import React, { useState } from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "./layout"

export default ({ data }) => {
  const [whichEp, setWhichEp] = useState(1)
  const forwardOne = () => {
    setWhichEp(whichEp + 1)
    console.log(whichEp)
  }
  const backOne = () => {
    if (whichEp > 1) {
      setWhichEp(whichEp - 1)
      console.log(whichEp)
    }
  }

  const changePageHandler = e => {
    setWhichEp(e.target.value)
  }
  const changePage = event => {
    console.log("chaning page" + whichEp)
    event.preventDefault()
  }

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
          IRL
        </h1>
        <h4>Nicks IRL Series</h4>
        <div>
          {data.allMarkdownRemark.nodes
            .filter(ech => ech.frontmatter.episode === whichEp)
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
                />
              </div>
            ))}
        </div>
        <button onClick={backOne}>back</button>
        <button onClick={forwardOne}>forward</button>
        <form onSubmit={changePage}>
          <input type="number" value={whichEp} onChange={changePageHandler} />
        </form>

        <submit />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($vari: Int! = 6) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: [DESC, ASC] }
      filter: { frontmatter: { series: { eq: $vari } } }
    ) {
      nodes {
        id
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          episode
          imgLink
          series
          title
          author
        }
        excerpt
      }
    }
  }
`
