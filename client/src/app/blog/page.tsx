import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import Link from 'next/link'

interface IBlogPost {
  title: string
  slug: string
}

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'blog']{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url,
    }`
  )
  return {
    title: `NexaTech | ${seoData[0].seoTitle}`,
    description: seoData[0].seoDescription,
    openGraph: {
      title: `NexaTech | ${seoData[0].seoTitle}`,
      description: seoData[0].seoDescription,
      url: 'https://nexatech.com/',
      siteName: 'NexaTech',
      images: [
        {
          url: seoData[0].seoImage,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default async function page() {
  const postData = await clientFetch(
    groq`*[_type == 'post'] | order(_createdAt desc) {
      "title": title,
      "slug": slug,
      "date": date,
      "authors": authors[] ->{
        name
      },
      "postContent": postContent,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url,
    }`
  )

  console.log(postData)

  return (
    <CommonWrapper>
      <div className="max-w-screen-lg mx-auto my-8 p-4">
        <ul>
          {postData.map((post: IBlogPost, index: number) => {
            return (
              <li key={index}>
                <Link href={`/blog/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </CommonWrapper>
  )
}
