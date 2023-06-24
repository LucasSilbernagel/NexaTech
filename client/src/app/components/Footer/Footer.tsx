import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import EmailForm from '../EmailForm/EmailForm'
import styles from './Footer.module.css'
import Link from 'next/link'

export default async function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="flex flex-col md:flex-row gap-12 lg:gap-36 mx-auto max-w-max">
        <div>
          <EmailForm />
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-10">Follow us</h3>
          <ul className={styles.SocialLinks}>
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
      <div className="mt-12 flex flex-col md:flex-row gap-12 lg:gap-36 mx-auto max-w-max">
        <ul className="flex gap-12">
          <li>
            <Link href="/products">Products</Link>
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
