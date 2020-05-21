import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MainSection = styled.section`
  display: flex;
`

const MainTextWrapper = styled.div`
  width: 55%;
`

const ImageWrapper = styled.div`
  width: 45%;
  max-width: 300px;
  margin-bottom: 1.45rem;
`

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection>
      <MainTextWrapper>
        <h1>Choose school you want to learn in</h1>
        <p>
          Example school is blazingly modern school, which helps students to
          succeed in their high aspiration tasks. Have you encountered any
          school problem? Don't worry, we are going to help you in everything.
        </p>
        <p>
          <Link to="/about/">Learn more</Link>
        </p>
      </MainTextWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </MainSection>
    <section>
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
    </section>
    <section>
      <h2>More</h2>
      <ul>
        <li>
          <Link to="/open-hours/">Open hours</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
