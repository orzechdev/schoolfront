import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const contactQuery = useStaticQuery(graphql`
    query ContactQuery {
      allContactRecipientsJson {
        edges {
          node {
            name
            email
          }
        }
      }
      allContactOptionsJson {
        edges {
          node {
            name
            value
            valueUrl
          }
        }
      }
    }
  `)

  const getOptionValue = ({ value, valueUrl }) => {
    if (valueUrl) {
      return (
        <a href={valueUrl} target="_blanck">
          {value}
        </a>
      )
    } else {
      return value
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        Do you have any questions? Or have you encountered school problem? Feel
        free to contact with us, no matter what would you like to ask.
      </p>
      <section>
        <h2>Contact options</h2>
        <ul>
          {contactQuery.allContactOptionsJson.edges.map(
            ({ node }, index: number) => (
              <li key={index}>
                {node.name}: {getOptionValue(node)}
              </li>
            )
          )}
        </ul>
      </section>
      <section>
        <h2>Contact form</h2>
        <form
          method="post"
          action="#"
          style={{ display: `grid`, gap: `0.75rem` }}
        >
          <label>
            Your name
            <input name="sender-name" type="text" style={{ width: `100%` }} />
          </label>
          <label>
            Your email
            <input name="sender-email" type="email" style={{ width: `100%` }} />
          </label>
          <label>
            Recipient*
            <select name="recipient" required style={{ width: `100%` }}>
              {contactQuery.allContactRecipientsJson.edges.map(
                ({ node }, index: number) => (
                  <option key={index} value={node.email}>
                    {node.name}
                  </option>
                )
              )}
            </select>
          </label>
          <label>
            Title*
            <input
              name="title"
              type="text"
              required
              style={{ width: `100%` }}
            />
          </label>
          <label>
            Message*
            <textarea name="message" required style={{ width: `100%` }} />
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
