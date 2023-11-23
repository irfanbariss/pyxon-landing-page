import { ReactNode } from 'react'
import styles from './SectionContent.module.css'

interface SectionContentProps {
  children: ReactNode
}

const SectionContent = ({ children }: SectionContentProps) => {
  return <div className={styles.sectionContent}>{children}</div>
}
export default SectionContent
