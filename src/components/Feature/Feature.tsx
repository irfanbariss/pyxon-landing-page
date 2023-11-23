import { Grid } from '@mantine/core'
import FeatureItem from './FeatureItem'
import { features } from './featuresData'
import styles from './Feature.module.css'

const Feature = () => {
  return (
    <Grid gutter="xs" className={styles.grid}>
      {features.map((feature, title) => (
        <FeatureItem key={title} {...feature} />
      ))}
    </Grid>
  )
}

export default Feature
