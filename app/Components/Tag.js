import Link from 'next/link'
import React from 'react'

export default function Tag({tag}) {
    console.log(tag)
  return (
    <div >
      <Link href={`/tags/${tag}`}>{tag}</Link>
    </div>
  )
}
