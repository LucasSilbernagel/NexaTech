'use client'
import { useState } from 'react'
import './EmailForm.css'
import { FaArrowRight } from 'react-icons/fa'

export default function EmailForm() {
  const [email, setEmail] = useState<string>('')
  const handleSubmit = () => {
    alert(
      `This demo app does not include an email list, but if it did, ${email} would be subscribed!`
    )
  }
  return (
    <div className="EmailForm">
      <h3 className="font-semibold text-2xl mb-8">
        Get the inside scoop on all things NexaTech.
      </h3>
      <form className="w-full relative" onSubmit={handleSubmit}>
        <label htmlFor="email-form" className="sr-only">
          Enter your email address
        </label>
        <input
          id="email-form"
          type="email"
          placeholder="Enter your email address"
          className="EmailForm__Input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          aria-label="subscribe"
          className="text-gray-500 text-xl absolute right-1 top-4"
        >
          <FaArrowRight />
        </button>
      </form>
    </div>
  )
}
