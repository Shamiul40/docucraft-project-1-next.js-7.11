import React from 'react'

export default async function SubContentIdPage({ params }) {
  const { contentId, subContentId } = await params;

  return (
    <div>
      <h1>ContentId : {contentId || "no content"}</h1>
      <h2>SubContent : {subContentId || "no content"}</h2>
      <p>Full Path: /docs/{contentId}/{subContentId}</p>
    </div>
  )
}
