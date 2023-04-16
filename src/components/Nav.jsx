import React from 'react'
import Link from './Link'

export default function Nav() {
  return (
    <nav className='nav'>
      <section className='nav__container'>
        <h1 className='nav__title'>Chencho</h1>
        <ul className='nav__links'>
          <Link />
        </ul>
      </section>
    </nav>
  )
}
