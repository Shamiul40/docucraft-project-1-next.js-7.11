import React from 'react'

export default function AuthorPage({params : {name}}) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}