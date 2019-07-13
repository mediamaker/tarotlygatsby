import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import AudioPlayer from "../components/audioPlayer"
import Typography from '@material-ui/core/Typography';

import Dashboard from "./Dashboard"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    const header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    
    return (
      <div>
        <Dashboard/>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <Typography variant="caption" gutterBottom>© Tarotly {new Date().getFullYear()}</Typography> 
          {` `}
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
