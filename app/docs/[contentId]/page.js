

export default async function ContentIdPage({ params }) {
  const { contentId } = await params;

  return (
    <div>
      <p>content: {contentId || "(no contentId)"}</p>
      <div>{contentId}</div>
    </div>
  );
}
