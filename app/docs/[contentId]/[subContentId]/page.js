import { getDocumentsContent } from '@/lib/doc';
import React from 'react'

export default async function SubContentIdPage({ params }) {
  const { contentId, subContentId } = await params;

  const docContent = await getDocumentsContent(subContentId);
  console.log(docContent)  

  return (
    <div>
        <h1>{contentId} / {subContentId}</h1>
        <div>
            <p>published On: {docContent?.date} by {docContent?.author} under {docContent?.category}</p>
        </div>
    </div>
  )
}
