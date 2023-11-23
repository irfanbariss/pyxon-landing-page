import { Text } from '@mantine/core'
import styles from './FeatureContent.module.css'

interface FetureContentProps {
  title: string
  description: string
}

const FeatureContent = ({ title, description }: FetureContentProps) => {
  return (
    <>
      <Text className={styles.title}>{title}</Text>
      <Text className={styles.text}>{description}</Text>
    </>
  )
}
export default FeatureContent
