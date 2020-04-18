import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="News" />
      <h1>News</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default NewsPage
