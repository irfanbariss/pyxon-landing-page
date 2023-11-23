import { Center, Container } from '@mantine/core'
import styles from './Section.module.css'
import SectionContent from './SectionContent'
import SectionHeader from './SectionHeader'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title: string
  description: string
}

const Section = ({ children, title, description }: SectionProps) => {
  return (
    <Container fluid className={styles.container}>
      <Center>
        <Container fluid className={styles.section}>
          <SectionHeader title={title} description={description} />
          <SectionContent>{children}</SectionContent>
        </Container>
      </Center>
    </Container>
  )
}
export default Section
