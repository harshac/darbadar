import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div className="sans-serif bg-dark-green dark-gray">
    <Helmet
      title="Answers | Surge"
      meta={[
        { name: 'description', content: 'All answers to questions related to surge.sh at one place' },
      ]}
    >
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
      <link rel="stylesheet" href="http://unpkg.com/tachyons-cms@1.1.1/css/tachyons-cms.min.css" />
      <style>
        {`pre,
          blockquote {
            border-left: 0.5rem solid #9EEBCF;
            background-color: #E8FDF5;
            padding: 1rem;
            margin: 0;
            font-size: 0.75rem;
        }`}
      </style>
    </Helmet>

    <div className="flex mw9 center justify-between min-vh-100">
      <main className="w-two-thirds mv5 pa4 bg-white shadow-4 min-h-100">
        <h1 className="f1 fw9 lh-solid mh3 mt2 mb0 flex items-end bb b--near-white pb5"><span className="lh-title normal light-gray db tracked-tight"><b className="dark-green f1 lh-solid">.</b><span className="fw1 mh1">/</span></span><span className="db black tracked-tight v-mid">Answers<span className="f6 fw3 dib v-mid dark-green ml1" style={{ letterSpacing: 0 }}>.surge.sh</span></span></h1>
        {children()}
      </main>
      <footer className="w-third mt4 pt5 pl5">
        <p className="white f6 lh-copy washed-dark-green fw1 mt4 pt1 pb1">A <span className="fw5 white">Github</span> powered <b className="white fw6">Answers</b> system</p>
        <p className="lh-copy mt4"><a href="https://github.com/sintaxi/surge/issues/new" className="link f5 lh-solid ph4 pv3 ba white b--white br1">Ask a Question</a></p>
      </footer>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
