import React from 'react'

export default async function TagPage({params}) {
    const {name} = await params

  return (
    <div>
      <h1>{name}</h1>
      
    </div>
  )
}
