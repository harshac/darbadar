import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="h-75">
      <style>
        {`
          .feature {
            float: left;
            width: 60%;
            box-shadow: inset 0 0 0 0.25rem #f5f5f5;
            background: #e3e3e3 no-repeat center;
            background-size: cover;
          }
          .feature:nth-child(1) {
            width: 60%;
            height: 75%;
          }
          .feature:nth-child(2),
          .feature:nth-child(3) {
            width: 40%;
            height: 50%;
            float: right;
          }
        `}
      </style>
      <div className="h-100">
        <div className="bg-light-green feature" style={{backgroundImage: "url('https://c1.staticflickr.com/5/4423/37140555805_b774c3f2f7_b.jpg')"}}></div>
        <div className="bg-light-red feature" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/darbadar-postcards/images/2_sao_joao.jpg')"}}></div>
        <div className="bg-light-blue feature pa3">
          <h2 className="f5 mv0 gray ttu tracked">Instagram <span className="fw1">Photoset</span></h2>
        </div>
      </div>
    </div>
  )
}
