const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// exports.onCreatePage = ({ page, actions }) => {
//   const { deletePage, createPage } = actions

//   return new Promise(resolve => {
//     // if the page component is the index page component
//     if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
//       deletePage(page)

//       // create a new page but with '/' as path
//       createPage({
//         ...page,
//         path: "/",
//       })
//     }

//     resolve()
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            content
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.tsx`)

  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `news/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
        postData: edge.node,
      },
    })
  })
}
