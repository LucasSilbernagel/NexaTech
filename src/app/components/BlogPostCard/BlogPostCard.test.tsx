import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BlogPostCard from './BlogPostCard'
import { format } from 'date-fns'

const mockProps = {
  post: {
    date: '2023-07-17',
    title: 'My blog post',
    slug: '/blog-post',
    description: 'Blog post description',
    authors: [{ name: 'Author 1' }],
    image: '/exampleImage.png',
  },
}

const { post } = mockProps

describe('BlogPostCard', () => {
  test('renders correctly', () => {
    render(<BlogPostCard {...mockProps} />)
    expect(screen.getByTestId('blog-post-card')).toBeInTheDocument()
    expect(screen.getByTestId('blog-post-link')).toBeInTheDocument()
    expect(screen.getByTestId('blog-post-link')).toHaveAttribute(
      'href',
      `/blog/${post.slug}`
    )
    expect(screen.getByText(post.title)).toBeInTheDocument()
    expect(
      screen.getByText(format(new Date(post.date), 'PPP'))
    ).toBeInTheDocument()
    expect(screen.getByText('Authors:')).toBeInTheDocument()
    post.authors.forEach((author) => {
      expect(screen.getByText(author.name)).toBeInTheDocument
    })
    expect(screen.getByText(post.description)).toBeInTheDocument()
    expect(screen.getByTestId('blog-post-image')).toBeInTheDocument()
    expect(screen.getByTestId('blog-post-image')).toHaveAttribute(
      'src',
      `/_next/image?url=%2F${post.image.replace(/^./, '')}&w=3840&q=75`
    )
  })
})
