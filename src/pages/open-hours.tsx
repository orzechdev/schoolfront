import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OpenHoursPage: React.FC = () => {
  const openHours = useStaticQuery(graphql`
    query OpenHoursQuery {
      allOpenHoursJson {
        edges {
          node {
            weekDay
            open24Hours
            openHours {
              openTime
              closeTime
            }
          }
        }
      }
    }
  `)

  const getOpenHoursText = node => {
    if (node.open24Hours) {
      return "Opened whole day"
    } else if (!node.openHours || node.openHours.length === 0) {
      return "Closed"
    } else {
      return node.openHours.map((hour, hourIdx) => (
        <span key={hourIdx}>
          {hourIdx > 0 && ", "}
          {hour.openTime}-{hour.closeTime}
        </span>
      ))
    }
  }

  return (
    <Layout>
      <SEO title="Open hours" />
      {}
      <h1>Open hours</h1>
      <p>
        These are the hours our school is opened. Although in every case, it is
        usually better to contact with us before visit -{" "}
        <Link to="/contact/">please check out contact options</Link>.
      </p>
      <ul>
        {openHours.allOpenHoursJson.edges.map(({ node }, index: number) => (
          <li key={index}>
            <h2>
              {moment()
                .day(node.weekDay)
                .format("dddd")}
            </h2>
            <p>{getOpenHoursText(node)}</p>
          </li>
        ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default OpenHoursPage
