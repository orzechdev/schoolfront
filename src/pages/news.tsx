import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage: React.FC = () => {
  const news = useStaticQuery(graphql`
    query NewsQuery {
      allWordpressPost {
        edges {
          node {
            slug
            title
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="News" />
      <h1>News</h1>
      <ul>
        {news.allWordpressPost.edges.map(({ node }, index: number) => (
          <li key={node.slug}>
            <a href={node.slug}>
              <h2>{node.title}</h2>
            </a>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </li>
        ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default NewsPage
