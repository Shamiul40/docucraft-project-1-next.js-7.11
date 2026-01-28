import React from 'react'

export default function SubContentIdPage({params}) {

    const subContentId = params?.subContentId ?? "";

  return (
    <div>
      <h1>SubContent : {subContentId || "no content"}</h1>
    </div>
  )
}
