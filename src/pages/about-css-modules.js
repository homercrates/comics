import React from "react"
import { graphql, Link } from "gatsby"

import Container from "../components/container"
import styles from "../pages/about-css-modules.module.css"
import Layout from "./layout"

const User = props => (
  <Link to={"/author/" + props.linkTo}>
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p>created by: {props.author}</p>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  </Link>
)

export default ({ data }) => (
  <Layout>
    <Container>
      <h1>About  {data.site.siteMetadata.title} </h1>
      <p>CSS Modules are cool</p>
      <User
        username={"Dude Johnson"}
        author={data.site.siteMetadata.personA.name}
        avatar={
          "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        }
        excerpt={data.site.siteMetadata.personA.description}
        linkTo={data.site.siteMetadata.personA.name}
      />


      <p>lets put meta data there: {data.site.siteMetadata.aLittleXtra}</p>


      <User
        username={"Thor Dangerson"}
        author={data.site.siteMetadata.personB.name}
        avatar={
          "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        }
        excerpt={data.site.siteMetadata.personB.description}
        linkTo={data.site.siteMetadata.personB.name}
      />
      <User
        username={"Lego my Ego"}
        author={data.site.siteMetadata.personC.name}
        avatar={
          "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        }
        excerpt={data.site.siteMetadata.personC.description}
        linkTo={data.site.siteMetadata.personC.name}
      />
      <User
        username={"Mer Man"}
        author={data.site.siteMetadata.personD.name}
        avatar={
          "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        }
        excerpt={data.site.siteMetadata.personD.description}
        linkTo={data.site.siteMetadata.personD.name}
      />
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        aLittleXtra
        personA {
          name
          description
          pref
        }
        personB {
          name
          description
          pref
        }
        personC {
          name
          description
          pref
        }
        personD {
          name
          description
          pref
        }
      }
    }
  }
`
