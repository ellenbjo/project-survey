import React from 'react';

/*function that changes src for image depending on the animal chosen*/ 
export const displayAnimalImage = (animal) => {
  switch (animal) {
    case 'Hippo':
      return 'images/hippo.svg'
    case 'Rabbit':
      return 'images/rabbit.svg'
    case 'Fox':
      return 'images/fox.svg'
    case 'Snake':
      return 'images/snake.svg'
    default:
      return "haj"
  }
}

export const Summary = ({name, personality, spiritAnimal, temperature}) => {

  return (
    <section className="summary-container">

        <h2>RESULT</h2>

  <p tabIndex="0">Hi {name}! Thought you should know that your spirit animal is a {personality} {spiritAnimal}, that lives in a {temperature} ocean{/*add two form questions*/}</p>

        <img src={displayAnimalImage(spiritAnimal)} alt={spiritAnimal}/>

        <p>Not happy with the result?</p>

        <button onClick={() => window.location.reload(false)}>Try again!</button>

        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>

    </section>
  )
}

