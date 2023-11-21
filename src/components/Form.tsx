import styles from '../app/page.module.css'

const Form = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <h2>Let's Talk</h2>
        <form className={styles.form}>
          <input type="text" name="" id="" placeholder="Name" required />
          <input type="email" name="" id="" placeholder="Email" required />
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Your message..."
            required
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}
export default Form
