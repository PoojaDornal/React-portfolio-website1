import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'
import IMG2 from '../../assets/meal.jpg'
import IMG3 from '../../assets/netflix.jpg'
import IMG4 from '../../assets/calculator.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {/* 1 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
            </div>
            <h3>React Portfoli Website</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/PoojaDornal/React-portfolio-website1' className='btn'>Github</a>
            <a href='https://poojadornal.github.io/React-portfolio-website1/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>
         {/* 2 */}
         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
            </div>
            <h3>Meal Finder Project</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/PoojaDornal/Meal-finder' className='btn'>Github</a>
            <a href='https://poojadornal.github.io/Meal-finder/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
            </div>
            <h3>Netflix Landing Page</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/PoojaDornal/Netflix-clone' className='btn'>Github</a>
            <a href='https://poojadornal.github.io/Netflix-clone/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
            </div>
            <h3>Basic Calculator</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/PoojaDornal/Basic-Calculator' className='btn'>Github</a>
            <a href='https://poojadornal.github.io/Basic-Calculator/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

      </div>

    </section>
  )
}

export default Portfolio;
