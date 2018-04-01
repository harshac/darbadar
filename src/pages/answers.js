import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import marked from 'marked'
import question from '../../content/question.json'
import answers from '../../content/answers.json'

const SecondPage = () => (
  <div className="">
    <Helmet title={`${question.title} | Answers`} />
    <div className="ma3 ph5 pv4 bg-near-white ba b--light-gray" style={{margin: "0 -2rem"}}>
      <p className="ma3 f3 lh-copy">{question.body}</p>
      <div className="mt4 mb3 ml3">
        <img className="db w3 h3 br2" src={question.user.avatar_url} alt="" />
      </div>
    </div>
    <div className="" style={{margin: "0 -2rem"}}>
      {answers.map((answer, i) => (
        <article className="bt b--near-white ph5 pb3 flex items-start justify-between" key={`answer-${i}`}>
          <div className="flex-auto pa3">
            <div className="f6 lh-copy measure-wide mb4 nested-copy-line-height nested-copy-separator nested-img" dangerouslySetInnerHTML={{__html: marked(answer.body)}} />
            <div className="flex items-center h2">
              <img className="db w2 h2 br2 mr2" src={answer.user.avatar_url} alt="" />
              <p className="ma0 f6 lh-solid gray">{answer.user.login}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
)

export default SecondPage
