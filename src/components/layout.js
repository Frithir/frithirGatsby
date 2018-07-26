import React, { Fragment } from 'react'

import Helmet from 'react-helmet'

import './layout.css'
import MarvinVisions from '../fonts/MarvinVisions-Bold.woff'
import MarvinVisions2 from '../fonts/MarvinVisions-Bold.woff2'

import appletouchicon57x57 from '../icon/apple-touch-icon-57x57.png'
import appletouchicon114x114 from '../icon/apple-touch-icon-114x114.png'
import appletouchicon72x72 from '../icon/apple-touch-icon-72x72.png'
import appletouchicon144x144 from '../icon/apple-touch-icon-144x144.png'
import appletouchicon60x60 from '../icon/apple-touch-icon-60x60.png'
import appletouchicon120x120 from '../icon/apple-touch-icon-120x120.png'
import appletouchicon76x76 from '../icon/apple-touch-icon-76x76.png'
import appletouchicon152x152 from '../icon/apple-touch-icon-152x152.png'
import favicon196x196 from '../icon/favicon-196x196.png'
import favicon96x96 from '../icon/favicon-96x96.png'
import favicon32x32 from '../icon/favicon-32x32.png'
import favicon16x16 from '../icon/favicon-16x16.png'
import favicon128 from '../icon/favicon-128.png'
import mstile144x144 from '../icon/mstile-144x144.png'
import mstile70x70 from '../icon/mstile-70x70.png'
import mstile150x150 from '../icon/mstile-150x150.png'
import mstile310x150 from '../icon/mstile-310x150.png'
import mstile310x310 from '../icon/mstile-310x310.png'

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
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#1e1e1e',
        },
        {
          name: 'application-name',
          content: '&nbsp;',
        },
        {
          name: 'msapplication-TileColor',
          content: '#FFFFFF',
        },
        {
          name: 'msapplication-TileImage',
          content: { mstile144x144 },
        },
        {
          name: 'msapplication-square70x70logo',
          content: { mstile70x70 },
        },
        {
          name: 'msapplication-square150x150logo',
          content: { mstile150x150 },
        },
        {
          name: 'msapplication-wide310x150logo',
          content: { mstile310x150 },
        },
        {
          name: 'msapplication-square310x310logo',
          content: { mstile310x310 },
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

      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href={appletouchicon57x57}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href={appletouchicon114x114}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href={appletouchicon72x72}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={appletouchicon144x144}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href={appletouchicon60x60}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={appletouchicon120x120}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href={appletouchicon76x76}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={appletouchicon152x152}
      />
      <link rel="icon" type="image/png" href={favicon196x196} sizes="196x196" />
      <link rel="icon" type="image/png" href={favicon96x96} sizes="96x96" />
      <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon128} sizes="128x128" />
    </Helmet>
    {children}
  </Fragment>
)

export default Layout
