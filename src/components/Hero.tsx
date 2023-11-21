import styles from '../app/page.module.css'
import Form from './Form'

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.gradientText}>
            We create software solutions for you
          </p>
        </div>

        <Form />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16072d"
          fill-opacity="1"
          d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,213.3C1120,192,1280,192,1360,192L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  )
}
export default Hero
