'use client'
import { useState } from 'react'
import styles from './EmailForm.module.css'
import { FaArrowRight } from 'react-icons/fa'

export default function EmailForm() {
  const [email, setEmail] = useState<string>('')
  const handleSubmit = () => {
    alert(
      `Email subscription functionality is not fully set up, but if it was, ${email} would be subscribed!`
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
          className={styles.EmailForm__Input}
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