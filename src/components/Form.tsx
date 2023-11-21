import styles from '../app/page.module.css'

const Form = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <h2>Let's Talk</h2>
        <form className={styles.form}>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Your message..."
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}
export default Form