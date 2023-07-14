import { clientFetch } from '@/app/clientFetch'
import CommonWrapper from '@/app/components/CommonWrapper'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import Seo from '@/app/Seo'
import BlogPost from '@/app/components/BlogPost/BlogPost'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug

  const seoData = await clientFetch(
    groq`*[_type == 'post' && slug == "${slug}"][0]{
      "seoTitle": title,
      "seoDescription": description,
      "seoImage": image.asset->url,
    }`
  )
  return Seo(seoData.seoTitle, seoData.seoDescription, seoData.seoImage)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await clientFetch(
    groq`*[_type == 'post' && slug == "${params.slug}"][0]{
      "title": title,
      "date": date,
      "authors": authors[] ->{
        name
      },
      "postContent": postContent,
    }`
  )

  return (
    <CommonWrapper>
      <div className="py-8">
        <BlogPost postData={postData} />
      </div>
    </CommonWrapper>
  )
}
