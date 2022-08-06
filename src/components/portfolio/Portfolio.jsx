import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/robologo.png'
import IMG2 from '../../assets/IMG2.png'

const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Robofriends_FirstReact project',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'React API Crypto',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/ReactAPICrypto/',
    },
    {
      id: 3,
      image: IMG1,
      title: 'Robofriends_FirstReact project',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
      id: 4,
      image: IMG1,
      title: 'Robofriends_FirstReact project',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
      id: 5,
      image: IMG1,
      title: 'Robofriends_FirstReact project',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
    },
    {
      id: 6,
      image: IMG1,
      title: 'Robofriends_FirstReact project',
      github: 'https://github.com/ShaguftaNaureen',
      demo: 'https://shaguftanaureen.github.io/Udemy_Robofriends/',
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