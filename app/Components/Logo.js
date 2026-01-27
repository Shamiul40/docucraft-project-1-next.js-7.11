
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.svg" alt="image" width={240} height={40} priority />

      </Link>
    </div>
  )
}
