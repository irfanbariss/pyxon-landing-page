import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  title: string
  description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{description}</p>
    </div>
  )
}
export default SectionHeader
