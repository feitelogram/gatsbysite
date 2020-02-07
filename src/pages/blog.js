import React from 'react'
import Layout from "../components/layout"
import {graphql, useStaticQuery, Link} from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{ 
              frontmatter{
                title
                date
              }
              fields{
                  slug
              }
            } 
          }
        }
      }
    `)


    const renderList = () => {
        const postArr = data.allMarkdownRemark.edges
        return postArr.map(post => {
            return <li className={blogStyles.post} key= {post.node.id}>
                <Link to={"/blog/" + post.node.fields.slug}><h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
                </Link>
            </li>
        })
    }


    return (
            <Layout>
            <h1>My Blog</h1>
                <ol className={blogStyles.posts}>{renderList()}</ol>
            </Layout>
       
    )
}

export default BlogPage
