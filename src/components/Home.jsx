import React from 'react'
import logo from '../../public/user-img.jpg'

export default function Home() {
  return (
    <section className='home'>
      <article className='home__container'>
        <article className='home__texts'>
          <h1 className='home__title'>
            Hello i am <b>Chencho</b>
          </h1>
          <p className='home__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quidem quo, distinctio sed pariatur ab? Sed dolorum saepe, nostrum
            accusantium nobis magnam iusto iste dolore ipsam earum reiciendis?
            Consequuntur illo placeat soluta accusamus suscipit voluptatibus
            temporibus aliquam non explicabo alias corrupti autem, cupiditate
            nesciunt. Reiciendis ex nostrum labore a laborum.
          </p>
        </article>
        <article className='home__image'>
          <img className='home__img' src={logo} alt='img' />
        </article>
      </article>
    </section>
  )
}
