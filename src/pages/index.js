import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import BMO from "../posts/bmo.png"
import {Link} from "gatsby"


const IndexPage = () => {
    const linkStyle = {
        textDecoration: "none", 
        fontWeight: "bolder",
        color: "black",
    }

    const pStyle = {
        fontStyle: "italic"
    }

    return(
        <Layout>
            <Head title= "Home"/>
            <div><img alt="BMO" src={BMO} /></div>
        <h1 style={{color: "black"}}>You looking for meetups to go to?</h1>
        <h2><Link style={{textDecoration: "none", color: "black"}} to="/meetup">I am going to these this week, so who knows if they are good, but I hope so!</Link></h2>
        <h3>Other Stuff:</h3>
        <p style={pStyle}>Want to see my friends jokes retweeted?: <a target="_blank" rel="noopener noreferrer" style={linkStyle} href="http://twitter.com/feitelogram">Twitter</a></p>
        <p style={pStyle}>Want to see pictures of pizza and dogs?: <a target="_blank" rel="noopener noreferrer" style={linkStyle} href="http://instagram.com/feitelogram">Instagram</a></p>
        <p style={pStyle}>Want to hire me and get dogs and jokes?: <a target="_blank" rel="noopener noreferrer" style={linkStyle} href="http://linkedin/in/nicholas-feitel">LinkedIn</a></p>

        </Layout>
    )
}

export default IndexPage

