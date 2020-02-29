import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "./layout"

export default ({ data }) => {
  const [whichEp, setWhichEp] = useState(1)
  const [tempHold, setTempHold] = useState(1)

  const forwardOne = () => {
    let spot = whichEp
    setWhichEp(spot + 1)
  }
  const backOne = () => {
    let spot = whichEp
    if (whichEp > 1) {
      setWhichEp(spot - 1)
    }
  }

  const adjustPage = e => {
    setTempHold(Number(e.target.value))
  }

  const changePage = evt => {
    evt.preventDefault()
    console.log(tempHold + ": changing whichEp")
    setWhichEp(tempHold)
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
          Zack's
        </h1>
        <h4>Zack's Minesweeper Series</h4>
        <div>here</div>

        <div>
          {data.allMarkdownRemark.nodes
            .filter(ech => ech.frontmatter.episode === whichEp)
            .map(({ frontmatter }) => (
              <div key={frontmatter.episode}>
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
                <p>{data.allMarkdownRemark.nodes.id}</p>

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
          <label>
            Skip To Page:
            <input type="number" value={tempHold} onChange={adjustPage} />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <button onClick={() => console.log("which: " + whichEp)}>print</button>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($vari: Int! = 1) {
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
