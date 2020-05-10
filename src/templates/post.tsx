import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.postData.title} />
      <h1>{pageContext.postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.postData.content }} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default PostTemplate
