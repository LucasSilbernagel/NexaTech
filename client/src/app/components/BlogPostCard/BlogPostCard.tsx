import { IBlogPost } from '@/app/blog/page'
import { format } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

const BlogPostCard = ({ post }: { post: IBlogPost }) => {
  return (
    <li className="mb-8">
      <Link href={`/blog/${post.slug}`} className="Blog__link">
        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-start">
          <div className="flex flex-col justify-center pl-3">
            <h2 className="uppercase font-bold mb-2 text-xl">{post.title}</h2>
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
              priority
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
}

export default BlogPostCard
