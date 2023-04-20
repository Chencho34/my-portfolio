import React from 'react'

export default function Card({ title, paragraph }) {
  return (
    <section className='card'>
      <section className='card__container'>
        <article className='card__header'>
          <h1 className='card__title'>{title}</h1>
        </article>
        <article className='card__body'>
          <p className='card__paragraph'>{paragraph}</p>
        </article>
        <article className='card__fotter'>
          <a href='#'>link</a>
        </article>
      </section>
    </section>
  )
}
