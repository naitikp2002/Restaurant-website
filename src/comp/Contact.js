import React from 'react'
import BasicTextFields from './InputFiels'
import MultilineTextFields from './message'

function Contact() {
  return (
<div>
<BasicTextFields label={"Name"} size={30}/>
<BasicTextFields label={"Email"} size={40}/>
<MultilineTextFields/>
</div>
  )
}

export default Contact
