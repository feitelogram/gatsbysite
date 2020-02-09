import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyle from "./blog.module.scss"



const contact = () => {
  const linkStyle = {
    textDecoration: "none", 
    fontWeight: "bolder",
    color: "black",
    fontSize: "1.3rem",
}
    return (
      <Layout>
        <Head title="Contact"/>
            <h1>Say hi, will you?</h1>
            <ul className={contactStyle.posts}>
            <li className={contactStyle.post}><a style={linkStyle} href="mailto:nicholas.feitel@gmail.com">Email Nic</a></li>
            <li className={contactStyle.post}><a style={linkStyle} href="https://wonderful-jackson-9e020f.netlify.com">See his Portfolio</a></li>
            <li className={contactStyle.post}><a style={linkStyle} href="https://www.linkedin.com/in/nicholasfeitel/">Network with him on LinkedIn</a></li>
            <li className={contactStyle.post}><a style={linkStyle} href="https://www.youtube.com/watch?v=4BQLE_RrTSU">Have the time of your life</a></li>
            </ul>
            </Layout>
        
    )
}

export default contact
