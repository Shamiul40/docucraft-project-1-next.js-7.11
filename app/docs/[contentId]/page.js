import { getDocumentsContent } from "@/lib/doc";


export default async function ContentIdPage({ params }) {
  const { contentId } = await params;

  const getAllDocumentsContent = await getDocumentsContent(contentId)

  return (
    <div>
        <h1>introduction</h1>
        <div>
          <p> 
             published on : {getAllDocumentsContent.date} by: {getAllDocumentsContent.author}
          </p>
      
        </div>
    </div>
  );
}
