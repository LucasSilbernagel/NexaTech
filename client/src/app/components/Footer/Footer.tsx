import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import EmailForm from '../EmailForm/EmailForm'
import './Footer.css'
import Link from 'next/link'

export default async function Footer() {
  return (
    <footer className="Footer">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-screen-2xl mx-auto 2xl:px-10">
        <div>
          <EmailForm />
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-10">Follow us</h3>
          <ul className="SocialLinks">
            <li>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Youtube">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row gap-12 lg:gap-36 justify-between max-w-screen-2xl mx-auto 2xl:px-10">
        <ul className="flex gap-12">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <p>
          Built by{' '}
          <a
            href="https://lucassilbernagel.com/"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Silbernagel
          </a>
        </p>
      </div>
    </footer>
  )
}
