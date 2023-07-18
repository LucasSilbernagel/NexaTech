import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BlogPost from './BlogPost'
import MockPortableText from './MockPortableText'
import { format } from 'date-fns'

const mockProps = {
  postData: {
    date: '2023-07-17',
    title: 'My blog post',
    authors: [{ name: 'Author 1' }],
    postContent: MockPortableText,
  },
}

const { postData } = mockProps

describe('BlogPost', () => {
  test('renders correctly', () => {
    render(<BlogPost {...mockProps} />)
    expect(
      screen.getByText(format(new Date(postData.date), 'PPP'))
    ).toBeInTheDocument()
    expect(screen.getByText(postData.title)).toBeInTheDocument()
    postData.authors.forEach((author) => {
      expect(screen.getByText(author.name)).toBeInTheDocument
    })
    expect(screen.getByTestId('blog-post-body')).toBeInTheDocument()
  })
})
