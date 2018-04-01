import React from 'react'
import Link from 'gatsby-link'
import page from '../../content/issues.json'

const IndexPage = () => (
  <div>
    <div className="ma4">
      {page.map((answer, i) => (
        <article className="pa3 flex items-start justify-between" key={`answer-${i}`}>
          <div className={`ba br1 tc ${(answer.state === 'open') ? 'b--light-gray' : 'b--light-green'}`}>
            <p className="ma3 code w1 lh-solid">{answer.comments}</p>
          </div>
          <div className="flex-auto ml4 pb4">
            <h4 className="f4 lh-title ma0"><a className="link dark-green" target="_blank" href={answer.html_url}>{answer.title}</a></h4>
            <p className="f5 lh-copy measure-wide mb4">{answer.body.substring(0, 136)}&hellip;</p>
            <div className="flex items-center h2">
              <img className="db w2 h2 br2 mr2" src={answer.user.avatar_url} alt="" /><p className="ma0 f6 lh-solid gray">{answer.user.login}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
)

export default IndexPage
