"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BLOG_ITEM {
  title: string;
  image: string;
  date: string;
  slug: string;
}

export default function BlogList() {
  const router = useRouter();
  const [blogArticles, setBlogArticles] = useState<JSX.Element[]>([]);
  useEffect(() => {
    let blogData: BLOG_ITEM[] = [];

    fetch(`/blog/data`, { method: "GET" })
      .then(async (res: Response) => {
        const data = await res.json();

        const filtered_data = data.data.results.filter((item: any) => {
          return item.public_url !== null;
        });

        blogData = filtered_data.map((item: any) => {
          let image = undefined;
          switch (item.cover?.type) {
            case "file":
              image = item.cover.file.url;
              break;
            case "external":
              image = item.cover.external.url;
              break;
            default:
              image = undefined;
              break;
          }
          return {
            title: item.properties.Name.title[0].text.content,
            image: image,
            date: new Date(item.created_time).toLocaleDateString(),
            slug: item.properties.Slug.rich_text[0].plain_text,
          };
        });

        setBlogArticles(
          blogData.map((item, index) => {
            if (!item.image) {
              return (
                <div
                  key={index}
                  className={`max-w-96 mx-auto mb-12 ${index === 0 ? "col-span-2" : ""}`}
                >
                  <Link href={`https://merckel.dev/blog/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      className="w-80 mx-auto rounded-3xl mb-3"
                    />
                    <h2 className="text-xl font-bold text-center">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 text-center">
                      {item.date}
                    </p>
                  </Link>
                </div>
              );
            }
            return (
              <div
                key={index}
                className={`max-w-96 mx-auto mb-12 ${index === 0 ? "col-span-2" : ""}`}
              >
                <Link href={`https://merckel.dev/blog/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={`${item.title} preview`}
                    className="w-80 mx-auto rounded-3xl mb-3"
                  />
                  <h2 className="text-xl font-bold text-center">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 text-center">
                    {item.date}
                  </p>
                </Link>
              </div>
            );
          }),
        );
      })
      .catch((err: Error) => {
        console.log(err.name, err.message);
      });
  }, []);

  return (
    <section className="mb-12 md:w-1/2 md:mx-auto md:px-0">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-12">Blog</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogArticles.length === 0 ? (
          <div>
            <p className="text-xl text-center mb-6">
              Currently, there are no public tools available!
            </p>
            <button
              type="button"
              onClick={() => {
                router.push("/");
              }}
              className="block w-1/2 bg-accent p-4 rounded-xl text-white font-bold text-xl mx-auto"
            >
              Return to Home
            </button>
          </div>
        ) : (
          blogArticles.map((article) => article)
        )}
      </div>
    </section>
  );
}
