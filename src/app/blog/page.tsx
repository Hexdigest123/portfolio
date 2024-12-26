import Link from "next/link"

interface BLOG_ITEM {
  title: string
  image: string
  date: string
  slug: string
}

export default function BlogList() {
  const receiveBlog = async () => {
    let blogItems: BLOG_ITEM[] = []

    await fetch(`https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NOTION_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        filter: {
          property: 'Category',
          select: {
            equals: 'Blog',
          },
        },
        sorts: [
          {
            property: "Erstellt",
            direction: "descending"
          }
        ]
      })
    }).then(async (res: Response) => {
      const data = await res.json()

      blogItems = data.results.map((item: any) => {
        let image = undefined
        switch (item.cover?.type) {
          case "file":
            image = item.cover.file.url
            break;
          case "external":
            image = item.cover.external.url
            break;
          default:
            image = undefined;
            break
        }
        return {
          title: item.properties.Name.title[0].text.content,
          image: image,
          date: new Date(item.created_time).toLocaleDateString(),
          slug: item.properties.Slug.rich_text[0].plain_text,
        }
      })
    }).catch((err: Error) => {
      console.log(err.name, err.message)
    })
    return blogItems.map((item, index) => {
      if (!item.image) {
        return (
          <div key={index} className={`max-w-96 mx-auto mb-12 ${index === 0 ? "col-span-2" : ""}`}>
            <Link href={`https://merckel.dev/blog/${item.slug}`}>
              <img src={item.image} alt={`${item.title} preview`} className="w-80 mx-auto rounded-3xl mb-3" />
              <h2 className="text-xl font-bold text-center">{item.title}</h2>
              <p className="text-sm text-gray-600 text-center">{item.date}</p>
            </Link>
          </div>

        )
      }
      return (
        <div key={index} className={`max-w-96 mx-auto mb-12 ${index === 0 ? "col-span-2" : ""}`}>
          <Link href={`https://merckel.dev/blog/${item.slug}`}>
            <img src={item.image} alt={`${item.title} preview`} className="w-80 mx-auto rounded-3xl mb-3" />
            <h2 className="text-xl font-bold text-center">{item.title}</h2>
            <p className="text-sm text-gray-600 text-center">{item.date}</p>
          </Link>
        </div>
      )
    })
  }


  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-12">Blog</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {receiveBlog()}
      </div>
    </section>
  )
}
