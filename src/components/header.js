import { Link } from "gatsby"
import React from "react"
import { graphql } from 'gatsby'

{/* site title gets from layout component*/}  

const Header = ({data}) => {    // access data and use it accordingly
const {siteTitle } = data.file.childIndexJson

  return(
 
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
          {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

// query for using data 
export const query = graphql`          
  query Header($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
       siteTitle
      }
    }
  }
 `

export default Header
