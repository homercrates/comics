import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default props => (
  <Link to={"/" + props.to}>
    <div>
      <div
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
          background-color: ${"white"};
          border: 1vh solid #2c2c2c;
          border-radius: ${"2vh"};
          padding: ${"1rem"};
          color: ${"#000"};
        `}
      >
        <h3>
          {props.title}{" "}
          <span
            css={css`
              color: #bbb;
            `}
          >
            — {props.date}
          </span>
        </h3>
        {props.episode ? <p>episode: {props.episode}</p> : null}
        <div>
          {props.imgLink ? <img src={props.imgLink} alt="random" /> : null}
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  </Link>
)
