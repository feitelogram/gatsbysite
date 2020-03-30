import React from 'react'
import Layout from "../components/layout"
import {graphql, useStaticQuery, Link} from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort: {
            fields: publishedDate,
            order:ASC 
          }
        ){
          edges{
            node{
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY" )
            }
          }
        }
      } 
    `)


    const renderList = () => {
        const postArr = data.allContentfulBlogPost.edges
        return postArr.map(post => {
            return <li className={blogStyles.post} key= {post.node.id}>
                <Link to={"/meetup/" + post.node.slug}><h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
                </Link>
            </li>
        })
    }


    return (
            <Layout>
              <Head title="Meetups"/>
            <h1>Week of March 30th, 2020</h1>
                <ol className={blogStyles.posts}>{renderList()}</ol>
            </Layout>
       
    )
}

export default BlogPage
