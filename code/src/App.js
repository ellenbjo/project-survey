import React, { useState } from 'react'

import { StartSection } from './components/StartSection'
import { Form } from './components/Form'

export const App = () => {
  const [displayForm, setDisplayForm] = useState(false)

/* function that is invoked when button is clicked. Changes displayform value to true and displays the form*/ 
  const handleStartClick = event => {
  setDisplayForm(true)
  }

  return (
    <>
      <main className='main-content-container'>
        {! displayForm ? (
        <section className='intro-text-container'>
          <StartSection onStartClick={handleStartClick}/>  
        </section> )
        : (
        <section className='form-container'>
          <Form/>
        </section>
        )}
      </main>
    </>
  )
}
