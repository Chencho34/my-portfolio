import React from 'react'

const items = [{ item: 'projects' }, { item: 'contact' }, { item: 'about' }]

export default function Link() {
  return (
    <>
      {items.map(({ item }) => {
        return (
          <li key={item} className='nav__link'>
            <a href='#' key={item}>
              {item}
            </a>
          </li>
        )
      })}
    </>
  )
}

// export function Linkv2({ title }) {
//   return (
//     <li className='nav__link'>
//       <a href='#'>{title}</a>
//     </li>
//   )
// }
