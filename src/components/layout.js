import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()



const Layout = ({ children, locale, data }) => {  // accesss data"
  console.log(data,"fromlayout")
  return(  
    <LocaleProvider value={locale}>
      <>
      <Header data={data}/>        {/*pass 'data' to header so it can use GraphQL query  */}
      <div 
      style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
            {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      </div>
     </>
    </LocaleProvider>
  )
}

export { LocaleConsumer }

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  path: PropTypes.string,
  locale: PropTypes.string.isRequired
}

Layout.defaultProps = {
  path: '/'
}



export const query = graphql`          
  query Layout($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "index" }) {
      childIndexJson {
       siteTitle
      }
    }
  }
 `

export default Layout