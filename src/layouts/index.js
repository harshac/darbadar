import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div className="debugdebug-grid-16 sans-serif bg-near-white dark-gray min-vh-100">
    <Helmet
      title="Darbadar"
      meta={[{ name: 'description', content: 'Travel trails of two friends' }]}
    >
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"
      />
      <style>
      {`
        img {
          max-width: 100%;
        }
      `}
      </style>
    </Helmet>
    <main className="min-vh-100">
      <div className="flex flex-column h-25 pt3 justify-between tc">
        <Link className="db link mid-gray" to="/">
          <h1 className="ma0"><img className="h3" src="http://darbadar.com/assets/name.png" alt="" /></h1>
          <p className="ma0 f6">Travel trails of two friends</p>
        </Link>
        <p className="ma0 measure-wide center lh-copy tl"><span className="black fw5">Darbadar</span>, a word of Farsi-Urdu origin, means door-to-door, a word we think best describes the essence of a traveler, an identity we take on sporadically. <Link className="link green" to="/about">more&hellip;</Link></p>
      </div>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
