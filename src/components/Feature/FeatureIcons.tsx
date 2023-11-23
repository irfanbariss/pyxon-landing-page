import { Image } from '@mantine/core'
import styles from './FeatureIcons.module.css'

interface FeatureIconsProps {
  icon: string
}

const FeatureIcons = ({ icon }: FeatureIconsProps) => {
  return <Image src={icon} className={styles.image} />
}
export default FeatureIcons
