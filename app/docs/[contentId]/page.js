

export default function ContentIdPage({ params }) {
  const contentId = params?.contentId ?? "";

  return (
    <div>
      <p>content: {contentId || "(no contentId)"}</p>
      <div>{contentId}</div>
    </div>
  );
}
