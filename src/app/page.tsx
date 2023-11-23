'use client'

import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Contact from '@/components/Contact'
import Products from './pages/Products'
import { Container } from '@mantine/core'

export default function Home() {
  return (
    <Container className={styles.main} fluid>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  )
}
