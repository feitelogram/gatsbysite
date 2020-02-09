import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
import headshot from "../posts/Headshot.jpg"



const about = () => {
    const linkStyle = {
        textDecoration: "none", 
        fontWeight: "bolder",
        color: "black",
    }

    return (
            <Layout>
                <Head title="About"/>
            <h1>About this site:</h1>
            <p>A simple list of meetups in New York City that the author intends to attend, made using Gatsby.js, React and Contentful</p>
            <h1>About this author:</h1>
            <img style={{maxWidth: "80%", height: "auto"}} alt="me" src={headshot}/>
            <p>Nicholas Feitel is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on.
                        Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. 
                        He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them.</p>
            <p><Link style={linkStyle} to="/contact">Want to work with me? Well, don't be shy.</Link></p>
            </Layout>
    )
}

export default about
