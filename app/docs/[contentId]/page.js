import { getDocumentsContent } from "@/lib/doc";
import Link from "next/link";


export default async function ContentIdPage({ params }) {
  const { contentId } = await params;

  const getAllDocumentsContent = await getDocumentsContent(contentId)

  return (
    <div>
        <h1>introduction</h1>
        <div>
          <p> 
             published on : {getAllDocumentsContent.date} by: <Link href={`/author/${getAllDocumentsContent.author}`}>{getAllDocumentsContent.author}</Link> under the <Link href={`/category/${getAllDocumentsContent.category}`}>{getAllDocumentsContent.category}</Link> category
          </p>
      
        </div>
        <div>

        </div>
    </div>
  );
}
