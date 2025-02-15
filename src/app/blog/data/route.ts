export async function GET() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "Category",
          select: {
            equals: "Blog",
          },
        },
        sorts: [
          {
            property: "Erstellt",
            direction: "descending",
          },
        ],
      }),
    },
  );

  const data = await response.json();
  if (!data) {
    return;
  }
  return Response.json({ data });
}
