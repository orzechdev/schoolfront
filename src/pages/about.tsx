import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About us</h1>
    <p>
      Example School is a blazingly modern school, which helps students to
      succeed in their high aspiration tasks.
    </p>
    <p>
      We are intrested in providing only superior assistance and service for
      maximizing learning results of our students. With this in mind, we are
      continuously investing in the extraordinarily new technology. We believe
      that one day it will pay off us very well.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AboutPage
