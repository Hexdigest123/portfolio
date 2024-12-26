import { redirect, notFound } from 'next/navigation';

export default async function BlogItem({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.NOTION_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      filter: {
        and: [
          {
            property: 'Category',
            select: {
              equals: 'Blog',
            },
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
        ]

      },
    })
  })

  if (response.ok) {
    const data = await response.json()
    console.log(data)
    if (data.results.length > 0) {
      const url = data.results[0].public_url
      return redirect(url)
    } else {
      notFound()
    }
  } else {
    notFound()
  }
}