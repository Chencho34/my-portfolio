import React from 'react'
import Button from './Button'

export default function Card({ title, paragraph, link }) {
  return (
    <section className='card'>
      <section className='card__container'>
        <div className='card__texts'>
          <article className='card__header'>
            <h1 className='card__title'>{title}</h1>
          </article>
          <article className='card__body'>
            <p className='card__paragraph'>{paragraph}</p>
          </article>
        </div>
        <article className='card__fotter'>
          <Button title='see' link={link} />
        </article>
      </section>
    </section>
  )
}
