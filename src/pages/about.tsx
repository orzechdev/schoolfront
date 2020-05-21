import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <h1>About us</h1>
    <p>
      We are intrested in providing only superior assistance and service for
      maximizing learning results of our students. With this in mind, we are
      continuously investing in the extraordinarily new technology. We believe
      that one day it will pay off us very well.
    </p>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
