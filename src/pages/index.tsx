import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex` }}>
      <div style={{ width: `55%` }}>
        <h1>Choose school you want to learn in</h1>
        <p>
          Example school is blazingly modern school, which helps students to
          succeed in their high aspiration tasks. Have you encountered any
          school problem? Don't worry, we are going to help you in everything.
        </p>
        <p>
          <Link to="/about/">Learn more</Link>
        </p>
      </div>
      <div style={{ width: `45%`, maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
    <h2>Overview</h2>
    <ul>
      <li>
        <Link to="/news/">News</Link>
      </li>
      <li>
        <Link to="/education-offer/">Education offer</Link>
      </li>
      <li>
        <Link to="/teaching-staff/">Teaching staff</Link>
      </li>
    </ul>
    <h2>More</h2>
    <ul>
      <li>
        <Link to="/open-hours/">Open hours</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
