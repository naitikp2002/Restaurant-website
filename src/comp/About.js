import React from 'react'
import about from './Images/about.jpg'
import '../App.css';
function About() {
  return (
    <div className="about">
      <div
      className='aboutTop' style={{backgroundImage: `url(${about})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>
          About Us
        </h1>
        <p>
        Velit officia anim aliquip sint ea eu exercitation laboris tempor. Excepteur cupidatat quis ex enim magna amet tempor aliquip. Velit irure ullamco nulla commodo pariatur veniam consectetur adipisicing laboris minim duis. Occaecat nulla mollit ad qui sint dolore minim magna amet non esse ea. Deserunt culpa aliquip et adipisicing ullamco tempor non. Eiusmod elit do sit non exercitation exercitation occaecat.Velit officia anim aliquip sint ea eu exercitation laboris tempor. Excepteur cupidatat quis ex enim magna amet tempor aliquip. Velit irure ullamco nulla commodo pariatur veniam consectetur adipisicing laboris minim duis. Occaecat nulla mollit ad qui sint dolore minim magna amet non esse ea. Deserunt culpa aliquip et adipisicing ullamco tempor non. Eiusmod elit do sit non exercitation exercitation occaecat.
        </p>
      </div>
    </div>
  )
}

export default About