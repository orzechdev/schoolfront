import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EducationOfferPage: React.FC = () => {
  const educationOffer = useStaticQuery(graphql`
    query EducationOfferQuery {
      allEducationOfferJson {
        edges {
          node {
            studyField
            summary
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Education offer" />
      <h1>Education offer</h1>
      <p>
        We offer three different specializations. Each one consists of courses
        with gaining field knowledge as well as performing practical trainings.
      </p>
      <ul>
        {educationOffer.allEducationOfferJson.edges.map(
          ({ node }, index: number) => (
            <li key={index}>
              <h2>{node.studyField}</h2>
              <p>{node.summary}</p>
            </li>
          )
        )}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default EducationOfferPage
