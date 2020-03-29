import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeachingStaffPage = () => (
  <Layout>
    <SEO title="Teaching staff" />
    <h1>Teaching staff</h1>
    <p>
      Our teaching staff consists only of the greatest specialists, very highly
      educated people, actively contributing to their field of studies, what
      ensures enormous and extraordinary level of teaching for our students.
    </p>
    <ul>
      <li>
        <h2>David Smith</h2>
        <h3>School management</h3>
        <p>
          Head of School. Initiator of plenty of activities consisting of
          improving learning possibilities for students, providing modren
          technology to the school and many more. Every student and parent is
          welcome in his room. Any external teaching or work initiative is
          seriously considered by him. There is no any reported school problem,
          which could be left alone by him.
        </p>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </li>
      <li>
        <h2>John Steward</h2>
        <h3>Mathematics</h3>
        <p>
          Incredible math head. Every year he with his best students participate
          in the most prestigious international math contests.
        </p>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </li>
      <li>
        <h2>Adam Gatsby</h2>
        <h3>Computer Science</h3>
        <p>
          Computer Science specialist. After his classes, every student is able
          to explain computational complexity of the most complex data
          structures and algorithms. Also, every student after his classes know
          how to create at least simple program or application like web
          application, using only the most modern technology.
        </p>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </li>
      <li>
        <h2>Katie Williams</h2>
        <h3>Problems and well-being at school</h3>
        <p>
          Psychologist. She conducts regular classes for students, which have
          greatly contributed to solving many of their learning problems. Also,
          the initiator of many activities aimed at combating violence and
          intolerance at school.
        </p>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </li>
      <li>
        <h2>Stefany Johnson</h2>
        <h3>English Language</h3>
        <p>
          Knows every detail of English language. Wrote plenty of novels, being
          the bestsellers every last consecutive year.
        </p>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeachingStaffPage
