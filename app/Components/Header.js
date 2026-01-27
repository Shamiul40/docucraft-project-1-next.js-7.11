import React from 'react'
import Logo from './Logo'
import Search from './Search'

export default function Header({docs}) {

        // console.log(docs)

        const root = docs.filter(doc=> !doc.parent)
        console.log("there is root console", root)

  return (
    <div>
      <Logo></Logo>


      <Search></Search>
    </div>
  )
}
