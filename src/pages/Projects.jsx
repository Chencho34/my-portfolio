import React from 'react'
import Card from '../components/Card'

export default function Projects() {
  return (
    <section className='container'>
      <section className='cards__container'>
        <Card
          title='Tesla-clone'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam sapiente labore vel saepe earum provident nulla eum molestias ut.'
        />
        <Card
          title='Disney-plus-clone'
          paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptas dolorum, asperiores officiis aliquid eum neque, accusantium dolore repellendus ut tempora corrupti vel esse, excepturi saepe est provident totam consectetur velit quis?'
        />
        <Card
          title='Tic-tac-toe'
          paragraph='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quis esse numquam alias, aperiam accusamus ipsam maiores unde, asperiores quibusdam iure nesciunt corrupti aliquid reprehenderit, consequatur tempore.'
        />
      </section>
    </section>
  )
}
