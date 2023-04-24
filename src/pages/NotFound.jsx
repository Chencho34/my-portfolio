import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className='container'>
      <section className='not-found__contain'>
        <h4 className='not-found__error'>Opps</h4>
        <p className='not-found__text'>404 - Not Found</p>
        <Link to='/'>Back to home</Link>
      </section>
    </section>
  )
}
