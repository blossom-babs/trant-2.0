import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>Trant</h1>
      <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder='search'/>
      </div>
      <ul>
        <Link href={'/blog'}>
        <a>Blog</a>
        </Link>
        
      </ul>
    </div>
  )
}

export default Header