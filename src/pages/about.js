import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
// import headshot from "../posts/Headshot.jpg"
import Img from "gatsby-image";




const About = () => {
    const linkStyle = {
        textDecoration: "none", 
        fontWeight: "bolder",
        color: "black",
    }

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "posts/Headshot.jpg"}){
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100){
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        }
    `)

    return (
            <Layout>
                <Head title="About"/>
                {console.log(data)}
            <h1>About this site:</h1>
            <p>A simple list of meetups in New York City that the author intends to attend, made using Gatsby.js, React and Contentful</p>
            <h1>About this author:</h1>
            {/* <img style={{maxWidth: "80%", height: "auto"}} alt="me" src={headshot}/> */}
            <Img alt="headshot" fluid={data.file.childImageSharp.fluid} />
            <p>Nicholas Feitel is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on.
                        Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. 
                        He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them.</p>
            <p><Link style={linkStyle} to="/contact">Want to work with me? Well, don't be shy.</Link></p>
            </Layout>
    )
}

export default About
