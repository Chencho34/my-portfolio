import React from 'react'
import logo from '../../public/user-img.jpg'
import Button from '../components/Button'

export default function Home() {
  return (
    <section className='home container'>
      <article className='home__container'>
        <article className='home__texts'>
          <h1 className='home__title'>
            Hello i'm <span>Chencho</span>
          </h1>
          <h2 className='home__work'>Web developer</h2>
          <p className='home__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quidem quo, distinctio sed pariatur ab? Sed dolorum saepe, nostrum
            accusantium nobis magnam iusto iste dolore ipsam earum reiciendis?
            Consequuntur illo placeat soluta accusamus suscipit voluptatibus
            temporibus aliquam non explicabo alias corrupti autem, cupiditate
            nesciunt. Reiciendis ex nostrum labore a laborum.
          </p>
          <Button />
        </article>
        <article className='home__image'>
          <img className='home__img' src={logo} alt='img' />
        </article>
      </article>
    </section>
  )
}
