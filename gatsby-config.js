/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `oiio`,
    aLittleXtra: `extra saucey sauce here`,
    personA: {
      name: `Nic`,
      description: `Hottest dude around`,
      pref: `purple`,
    },
    personB: {
      name: `Zack`,
      description: `godd at bizzness`,
      pref: `blue`,
    },
    personC: {
      name: `Diego`,
      description: `Yeah dude, yes.`,
      pref: `black`,
    },
    personD: {
      name: `Meredith`,
      description: `sick belt buckle bro`,
      pref: `blue`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
