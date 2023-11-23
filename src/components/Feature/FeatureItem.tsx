import { Center, Grid } from '@mantine/core'
import styles from './FeatureItem.module.css'
import FeatureGridLeft from './FeatureGridLeft'
import FeatureGridRight from './FeatureGridRight'

export interface FeatureItemProps {
  title: string
  description: string
  icon: string
  position: string
}

const FeatureItem = ({
  title,
  description,
  icon,
  position,
}: FeatureItemProps) => {
  return (
    <Center>
      <Grid className={styles.grid}>
        {position === 'left' ? (
          <FeatureGridLeft
            title={title}
            description={description}
            icon={icon}
            position={position}
          />
        ) : (
          <FeatureGridRight
            title={title}
            description={description}
            icon={icon}
            position={position}
          />
        )}
      </Grid>
    </Center>
  )
}
export default FeatureItem
