import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/robo.png'
import IMG2 from '../../assets/crypto.png'
import IMG3 from '../../assets/shopping.jpg'
import IMG4 from '../../assets/game.jpg'
import IMG5 from '../../assets/comingsoon.png'

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Search Robofriends',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'React API Crypto-Fetch',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/ReactAPICrypto/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Shopping Site-Redux',
      github: 'https://github.com/ShaguftaNaureen',
        demo: 'https://shaguftanaureen.github.io/Redux-Shopping/',
    },
    {
      id: 4,
      image: IMG4,
      title: 'Memory Game',
      github: 'https://github.com/ShaguftaNaureen',
        demo: 'https://shaguftanaureen.github.io/Memory-Game/',
    },
    {
      id: 5,
      image: IMG5,
        title: 'Yet to come',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
      id: 6,
      image: IMG5,
      title: 'Yet to come',
      github: '',
      demo: '',
    }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id}className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio