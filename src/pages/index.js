import React from 'react'

import GithubCorner from '../components/GithubCorner'
import ImageRow from '../components/ImageRow'
import Layout from '../components/layout'

import Welcome from '../templates/Welcome'
import About from '../templates/About'
import Experience from '../templates/Experience'
import CoffeeTime from '../templates/CoffeeTime'
import Contact from '../templates/Contact'

import './globalStyles.css'

const IndexPage = () => (
  <Layout>
    <GithubCorner url="https://github.com/Firthir" />
    <Welcome />
    <ImageRow collectionId="488" alt="Learning, reading, up skilling" />
    <About />
    <ImageRow collectionId="430468" alt="Office, space" />
    <Experience />
    <ImageRow collectionId="397770" alt="Coffee time, meetings, disscussion" />
    <CoffeeTime />
    <ImageRow collectionId="993239" alt="Interseting, eye catching" />
    <Contact />
  </Layout>
)

export default IndexPage
