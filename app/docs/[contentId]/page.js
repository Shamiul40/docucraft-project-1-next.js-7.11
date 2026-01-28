import Tag from "@/app/Components/Tag";
import { getDocumentsContent } from "@/lib/doc";
import Link from "next/link";

export default async function ContentIdPage({ params }) {
  const { contentId } = await params;

  const getAllDocumentsContent = await getDocumentsContent(contentId);

  return (
    <div>
      <h1 className="my-2 text-2xl">introduction</h1>
      <div>
        <p>
          published on : {getAllDocumentsContent.date} by {" "}
          <Link className="text-green-600 font-bold" href={`/author/${getAllDocumentsContent.author}`}>
            {getAllDocumentsContent.author}
          </Link>{" "}
          under the{" "}
          <Link className="text-green-600 font-bold" href={`/category/${getAllDocumentsContent.category}`}>
            {getAllDocumentsContent.category}
          </Link> {" "}
          category
        </p>
        <div className="flex gap-4 my-2 text-green-600">
          {getAllDocumentsContent.tags.map((tag) => (
            <Tag key={tag} tag={tag}></Tag>
          ))}
        </div>
      </div>
      <div className="my-2 flex flex-col gap-2 "
        dangerouslySetInnerHTML={{ __html: getAllDocumentsContent.contentHtml }}
      ></div>
    </div>
  );
}
