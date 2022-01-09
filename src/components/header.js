import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "./layout"
import {header, h1, h2} from './layout.module.css'
import '../fonts/OnePiece/one piece font.ttf'




const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  
`)

  return(
  <header className={header} style={{ background: `darkred`, marginBottom: `1.45rem`,}}>
    
      <h1 >
        <Link to="/" className={h1}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    <h2>
      <Link exact to="/pirates" className={h2}>Pirates</Link>
    </h2>
    
  </header>
  )
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
