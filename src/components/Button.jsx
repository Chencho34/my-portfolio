import React from 'react'

export default function Button({ title, link }) {
  return (
    <button className='btn'>
      <a className='btn__cta' href={link}>
        {title}
      </a>
    </button>
  )
}
