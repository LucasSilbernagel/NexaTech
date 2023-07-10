import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import Link from 'next/link'
import { format } from 'date-fns'
import Image from 'next/image'
import './Blog.css'

interface IBlogPost {
  title: string
  slug: string
  date: string
  description: string
  authors: { name: string }[]
  image: string
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
      "description": description,
      "image": image.asset->url,
    }`
  )

  return (
    <CommonWrapper>
      <div className="max-w-screen-lg mx-auto py-8 px-4">
        <h1 className="text-center text-4xl font-bold mb-12">Blog</h1>
        <ul>
          {postData.map((post: IBlogPost, index: number) => {
            return (
              <li key={index} className="mb-8">
                <Link href={`/blog/${post.slug}`} className="Blog__link">
                  <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-start">
                    <div className="flex flex-col justify-center pl-3">
                      <h2 className="uppercase font-bold mb-2 text-xl">
                        {post.title}
                      </h2>
                      <h3 className="max-w-max p-1 rounded-lg font-bold text-black mb-2 bg-gray-200">
                        {format(new Date(post.date), 'PPP')}
                      </h3>
                      <p className="font-bold mb-2 border-2 border-x-transparent border-t-transparent border-b-themeGreen-2 pb-1">
                        Authors:{' '}
                        {post.authors.map((author, index: number) => (
                          <span key={index} className="mr-2 font-normal">
                            {`${author.name}${
                              index + 1 < post.authors.length ? ',' : ''
                            }`}
                          </span>
                        ))}
                      </p>
                      <p>{post.description}</p>
                    </div>
                    <div className="max-w-[205px] flex items-center">
                      <Image
                        src={post.image}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </CommonWrapper>
  )
}
