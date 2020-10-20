import React from 'react';

export const TextInput = ({name, setName}) => {

  return (
    <section className="survey-question-container">
      <h2 tabIndex="0">What is your name?</h2>
      <label htmlFor={name}>Name:</label>
        <input
        type = "text"
        onChange = {(event) => setName(event.target.value)}
        value= {name}
        id = {name}
        required
        />
    </section>
  )
}

