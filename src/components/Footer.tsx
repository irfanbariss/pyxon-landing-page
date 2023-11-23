import { Image } from '@mantine/core'
import styles from '../app/page.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <Image src="/logo-without-favicon.png" w={200} h={150} fit="contain" />
        <div className={styles.footerNav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <h4>Istanbul / Kadıköy</h4>
        <p>© Pyxon 2023</p>
      </div>
    </div>
  )
}
export default Footer
