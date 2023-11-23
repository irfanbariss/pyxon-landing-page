'use client'

import { useState } from 'react'

import styles from '../app/page.module.css'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [textarea, setTextarea] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Name:' + name, 'Email:' + email, 'Message:' + textarea)
    setName('')
    setEmail('')
    setTextarea('')
  }

  return (
    <>
      <div className={styles.formContainer}>
        <h2 className={styles.gradientText}>Let's Talk</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            cols={30}
            rows={5}
            placeholder="Your message..."
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default Form
