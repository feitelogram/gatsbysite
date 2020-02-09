import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer  = () => {

  const linkStyle = {
    textDecoration: "none", 
    fontWeight: "bolder",
    color: "black",
}

    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            author
          }
        }
      }
    `)

    return (
        <div>
            <footer className={footerStyles.footer}>
                Made with <a target="_blank" rel="noopener noreferrer" style={linkStyle} href="https://www.gatsbyjs.org/">Gatsby.js</a> by {data.site.siteMetadata.author} ©2020 
            </footer>
        </div>
    )
}

export default Footer
