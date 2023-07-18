import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BlogPosts from './BlogPosts'

const mockProps = {
  postData: [
    {
      date: '2023-07-17',
      title: 'My blog post',
      slug: '/blog-post',
      description: 'Blog post description',
      authors: [{ name: 'Author 1' }],
      image: '/exampleImage.png',
    },
    {
      date: '2023-07-17',
      title: 'My blog post',
      slug: '/blog-post',
      description: 'Blog post description',
      authors: [{ name: 'Author 1' }],
      image: '/exampleImage.png',
    },
  ],
}

const { postData } = mockProps

describe('BlogPosts', () => {
  test('renders correctly', () => {
    render(<BlogPosts {...mockProps} />)
    expect(screen.getAllByTestId('blog-post-card').length).toEqual(
      postData.length
    )
  })
})
