import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {

  return (
  <Layout>
    <SEO title="Contact" />
    <article className="contact">
        <p>Email: <a href="mailto:codeforfaith@gmail.com">codeforfaith@gmail.com</a></p>
      </article>
  </Layout>
)};

export default ContactPage
