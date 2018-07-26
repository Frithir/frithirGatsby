import React, { Fragment } from 'react'

import Helmet from 'react-helmet'

import './layout.css'
import MarvinVisions from '../fonts/MarvinVisions-Bold.woff'
import MarvinVisions2 from '../fonts/MarvinVisions-Bold.woff2'

const Layout = ({ children }) => (
  <Fragment>
    <Helmet
      title="Alex Frith | Freelance Front End Software Developer - Gold Coast, Australia"
      meta={[
        {
          name: 'description',
          content:
            'Freelance Front End Software Developer - Gold Coast, Australia',
        },
        {
          name: 'keywords',
          content:
            'Frith, Alex, Freelance, Front End, Software Developer, Australia',
        },
      ]}
    >
      <style type="text/css">{`
        @font-face {
          font-family: 'Marvin Visions';
          src: url(${MarvinVisions2}) format("woff2"), url(${MarvinVisions}) format("woff");
          font-weight: 400;
          font-style: normal
        }
  `}</style>
    </Helmet>
    {children}
  </Fragment>
)

export default Layout
