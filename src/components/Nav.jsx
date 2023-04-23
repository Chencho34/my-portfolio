import React, { useState } from 'react'
import { paths } from '../constants/constants'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [activeBtn, setActiveBtn] = useState(0)

  const handleClick = (index) => {
    setActiveBtn(index)
  }

  return (
    <nav className='nav'>
      <section className='nav__container'>
        <h1 className='nav__title'>Chencho</h1>
        <ul className='nav__links'>
          {paths.map(({ item, to }, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={
                activeBtn === index ? 'nav__link--active' : 'nav__link'
              }
            >
              <Link to={to}>{item}</Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}
