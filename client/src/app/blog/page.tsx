import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import './Blog.css'
import BlogPosts from '../components/BlogPosts/BlogPosts'

export interface IBlogPost {
  title: string
  slug: string
  date: string
  description: string
  authors: { name: string }[]
  image: string
}

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'blog'][0]{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url,
    }`
  )
  return {
    title: `NexaTech | ${seoData.seoTitle}`,
    description: seoData.seoDescription,
    openGraph: {
      title: `NexaTech | ${seoData.seoTitle}`,
      description: seoData.seoDescription,
      url: 'https://nexatech.com/',
      siteName: 'NexaTech',
      images: [
        {
          url: seoData.seoImage,
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
        <BlogPosts postData={postData} />
      </div>
    </CommonWrapper>
  )
}
