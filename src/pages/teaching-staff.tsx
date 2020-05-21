import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeachingStaffPage: React.FC = () => {
  const teachingStaff = useStaticQuery(graphql`
    query TeachingStaffQuery {
      allTeachingStaffJson {
        edges {
          node {
            firstName
            lastName
            studyField
            biography
            linkedinUrl
            facbookUrl
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Teaching staff" />
      <h1>Teaching staff</h1>
      <p>
        Our teaching staff consists only of the greatest specialists, very
        highly educated people, actively contributing to their field of studies,
        what ensures enormous and extraordinary level of teaching for our
        students.
      </p>
      <ul>
        {teachingStaff.allTeachingStaffJson.edges.map(
          ({ node }, index: number) => (
            <li key={index}>
              <h2>
                {node.firstName} {node.lastName}
              </h2>
              <h3>{node.studyField}</h3>
              <p>{node.biography}</p>
              <ul>
                <li>
                  <a href={node.linkedinUrl}>LinkedIn</a>
                </li>
                <li>
                  <a href={node.facbookUrl}>Facebook</a>
                </li>
              </ul>
            </li>
          )
        )}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default TeachingStaffPage
