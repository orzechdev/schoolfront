import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const contactRecipients = useStaticQuery(graphql`
    query ContactRecipientsQuery {
      allContactRecipientsJson {
        edges {
          node {
            name
            email
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        Do you have any questions? Or have you encountered school problem? Feel
        free to contact with us, no matter what would you like to ask.
      </p>
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
            {contactRecipients.allContactRecipientsJson.edges.map(
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
          <input name="title" type="text" required style={{ width: `100%` }} />
        </label>
        <label>
          Message*
          <textarea name="message" required style={{ width: `100%` }} />
        </label>
        <button type="submit">Send</button>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
