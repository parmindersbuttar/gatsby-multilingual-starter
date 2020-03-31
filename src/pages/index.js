import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LocalizedLink from '../components/LocalizedLink'

const IndexPage = ({ pageContext: { locale }, data }) => {
const {hello,NextPage,page } = data.file.childIndexJson
  return(
    <Layout path="/" locale={locale} data={data}> {/* site title gets from graphql query and pass it to layout component */}
      <SEO title="Home" />
      <h1>{hello}</h1>
      <p><Link to="/it">Ita</Link></p>
      <p><Link to="/">En</Link></p>
      <p><Link to="/fr">Fr</Link></p>  {/* link for french langauge  */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <LocalizedLink to={page}>{NextPage}</LocalizedLink>
    </Layout>
  )
}
// graphql query is used to read or fetch values from json file.
export const query = graphql`
  query Home($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
        hello
        NextPage
        page
        siteTitle
      }
    }
  }
`
// IndexPage.propTypes = {
//   pageContext: PropTypes.shape({
//     locale: PropTypes.string.isRequired
//   }).isRequired,
//   data: PropTypes.shape({
//     file: PropTypes.shape({
//       childIndexJson: PropTypes.shape({
//         // title: PropTypes.string.isRequired,
//         // about: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//   }).isRequired
// }


export default IndexPage




