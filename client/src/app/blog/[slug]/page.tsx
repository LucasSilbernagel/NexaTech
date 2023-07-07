import { clientFetch } from '@/app/clientFetch'
import CommonWrapper from '@/app/components/CommonWrapper'
import { Metadata } from 'next'
import { groq } from 'next-sanity'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug

  const seoData = await clientFetch(
    groq`*[_type == 'post' && slug == "${slug}"]{
      "seoTitle": title,
      "seoDescription": description,
      "seoImage": image.asset->url,
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
      "categories": categories,
      "authors": authors,
      "postContent": postContent,
    }`
  )

  console.log(postData[0])
  return (
    <CommonWrapper>
      <div>My Post: {params.slug}</div>
    </CommonWrapper>
  )
}
