import React from 'react'
// import NavLink from './NavLink'
import { Link } from 'react-router-dom'

const paths = [
  { to: '/', item: 'Home' },
  { to: '/contact', item: 'Contact' },
  { to: '/about', item: 'About' },
]

export default function Nav() {
  return (
    <nav className='nav'>
      <section className='nav__container'>
        <h1 className='nav__title'>Chencho</h1>
        <ul className='nav__links'>
          {paths.map(({ item, to }) => (
            <li className='nav__link' key={item}>
              <Link to={to}>{item}</Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}
