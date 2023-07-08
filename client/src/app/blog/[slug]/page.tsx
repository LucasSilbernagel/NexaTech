import { clientFetch } from '@/app/clientFetch'
import CommonWrapper from '@/app/components/CommonWrapper'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import { format } from 'date-fns'
import { PortableText } from '@portabletext/react'
import ImageComponent from '@/app/components/ImageComponent/ImageComponent'
import Link from 'next/link'
import './BlogPost.css'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug

  const seoData = await clientFetch(
    groq`*[_type == 'post' && slug == "${slug}"]{
      "title": title,
      "description": description,
      "image": image.asset->url,
    }`
  )
  return {
    title: `NexaTech | ${seoData[0].title}`,
    description: seoData[0].description,
    openGraph: {
      title: `NexaTech | ${seoData[0].title}`,
      description: seoData[0].description,
      url: 'https://nexatech.com/',
      siteName: 'NexaTech',
      images: [
        {
          url: seoData[0].image,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await clientFetch(
    groq`*[_type == 'post' && slug == "${params.slug}"]{
      "title": title,
      "date": date,
      "authors": authors[] ->{
        name
      },
      "postContent": postContent,
    }`
  )

  const post = postData[0]

  return (
    <CommonWrapper>
      <div className="BlogPost">
        <div className="BlogPost__header">
          <p className="text-lg sm:text-xl underline underline-offset-4">
            {format(new Date(post.date), 'PPP')}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold my-4">{post.title}</h1>
          <p className="text-lg sm:text-xl bg-themeGreen-2 text-black max-w-max mx-auto p-1 rounded-sm mb-4">
            {post.authors.map((author: { name: string }, index: number) => (
              <span key={index} className="mr-3">
                {`${author.name}${index + 1 < post.authors.length ? ',' : ''}`}
              </span>
            ))}
          </p>
        </div>
        <div className="BlogPost__body">
          <PortableText
            value={post.postContent}
            components={{
              types: {
                image: ImageComponent,
              },
              marks: {
                link: ({ value, children }) => {
                  const { href } = value
                  return (
                    <Link
                      target={href.includes('http') ? '_blank' : ''}
                      rel={href.includes('http') ? 'noopener noreferrer' : ''}
                      href={href}
                    >
                      {children}
                    </Link>
                  )
                },
              },
            }}
          />
        </div>
      </div>
    </CommonWrapper>
  )
}
