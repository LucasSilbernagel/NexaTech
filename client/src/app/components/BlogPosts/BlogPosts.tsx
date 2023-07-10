'use client'
import { IBlogPost } from '@/app/blog/page'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Loader from '../Loader/Loader'
import BlogPostCard from '../BlogPostCard/BlogPostCard'

const BlogPosts = ({ postData }: { postData: IBlogPost[] }) => {
  const itemsPerPage = 4
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [records, setRecords] = useState<number>(itemsPerPage)

  const loadMore = () => {
    if (records === postData.length) {
      setHasMore(false)
    } else {
      setTimeout(() => {
        if (records + itemsPerPage > postData.length) {
          setRecords(postData.length)
        } else setRecords(records + itemsPerPage)
      }, 1000)
    }
  }

  const showBlogPosts = (posts: IBlogPost[]) => {
    const items = []
    for (let i = 0; i < records; i++) {
      if (posts.length >= records) {
        items.push(<BlogPostCard key={i} post={posts[i]} />)
      }
    }
    return items
  }

  return (
    <>
      {postData.length > itemsPerPage ? (
        <InfiniteScroll
          element="ul"
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={
            <li className="w-full flex justify-center" key="loader">
              <Loader />
            </li>
          }
        >
          {showBlogPosts(postData)}
        </InfiniteScroll>
      ) : (
        <ul>
          {postData.map((post, i) => {
            return <BlogPostCard key={i} post={post} />
          })}
        </ul>
      )}
    </>
  )
}

export default BlogPosts
