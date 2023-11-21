import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </main>
  )
}
