import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const about = () => {
    return (
            <Layout>
            <h1>About this site:</h1>
            <h2>Guess what, it's made with Gatsby.</h2>
            <p><Link to="/contact">Want to work with me? Contact Me</Link></p>
            </Layout>
    )
}

export default about
