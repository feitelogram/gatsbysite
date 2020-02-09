const path = require("path")


  module.exports.createPages = async ({graphql, actions }) => {
      const {createPage} = actions
      const blogTemplate = path.resolve("./src/templates/blog.js")
      const resp = await graphql(`query{
        allContentfulBlogPost {
          edges{
            node{
              slug 
            } 
          }
        }
      }`)

      resp.data.allContentfulBlogPost.edges.forEach(edge =>{
          createPage({
              component: blogTemplate,
              path: `/meetup/${edge.node.slug}`,
              context: {
                  slug: edge.node.slug
              }
          })
      })
  }
  