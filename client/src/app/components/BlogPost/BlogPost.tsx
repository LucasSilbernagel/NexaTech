import { format } from 'date-fns'
import './BlogPost.css'
import { PortableText } from '@portabletext/react'
import { TypedObject } from '@portabletext/types'
import RichImage from '../RichImage/RichImage'
import Link from 'next/link'

interface IBlogPostProps {
  postData: {
    date: string
    title: string
    authors: { name: string }[]
    postContent: TypedObject | TypedObject[]
  }
}

const BlogPost = (props: IBlogPostProps) => {
  const { postData } = props
  return (
    <div className="BlogPost">
      <div className="BlogPost__header">
        <p className="text-lg sm:text-xl underline underline-offset-4">
          {format(new Date(postData.date), 'PPP')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold my-4">
          {postData.title}
        </h1>
        <p className="text-lg sm:text-xl bg-themeGreen-2 text-black max-w-max mx-auto p-1 rounded-sm mb-4">
          {postData.authors.map((author: { name: string }, index: number) => (
            <span key={index} className="mr-3">
              {`${author.name}${
                index + 1 < postData.authors.length ? ',' : ''
              }`}
            </span>
          ))}
        </p>
      </div>
      <div className="BlogPost__body">
        <PortableText
          value={postData.postContent}
          components={{
            types: {
              image: RichImage,
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
  )
}

export default BlogPost
