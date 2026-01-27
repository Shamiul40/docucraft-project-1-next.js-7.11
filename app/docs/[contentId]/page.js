import React from 'react'

export default function ContentIdPage({params : {contentId}}) {
  return (
    <div>
        <p>content : {contentId}</p>
      {contentId}
    </div>
  )
}
