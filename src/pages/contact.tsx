import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Form = styled.form`
  display: grid;
  gap: 0.75rem;
`

const Input = styled.input`
  width: 100%;
`

const Select = styled.select`
  width: 100%;
`

const TextArea = styled.textarea`
  width: 100%;
`

const ContactPage: React.FC = () => {
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
        <Form method="post" action="#">
          <label>
            Your name
            <Input name="sender-name" type="text" />
          </label>
          <label>
            Your email
            <Input name="sender-email" type="email" />
          </label>
          <label>
            Recipient*
            <Select name="recipient" required>
              {contactQuery.allContactRecipientsJson.edges.map(
                ({ node }, index: number) => (
                  <option key={index} value={node.email}>
                    {node.name}
                  </option>
                )
              )}
            </Select>
          </label>
          <label>
            Title*
            <Input name="title" type="text" required />
          </label>
          <label>
            Message*
            <TextArea name="message" required />
          </label>
          <button type="submit">Send</button>
        </Form>
      </section>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
