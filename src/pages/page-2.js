import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const SecondPage = ({ pageContext: { locale }, data }) => {
  console.log(data,"checkPage2")
  return(
  
    <Layout path="/" locale={locale} data={data}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
} 
export const query = graphql`
  query page2($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        siteTitle
      }
    }
  }
  `

export default SecondPage
