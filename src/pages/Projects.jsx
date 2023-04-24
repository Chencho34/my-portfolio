import React from 'react'
import Card from '../components/Card'
import { projects } from '../constants/constants'

export default function Projects() {
  return (
    <section className='container container-projects'>
      <h1 className='projects__title'>my-projects</h1>
      <section className='cards__container'>
        {projects.map(({ id, title, paragraph, link }) => (
          <Card key={id} title={title} paragraph={paragraph} link={link} />
        ))}
      </section>
    </section>
  )
}
