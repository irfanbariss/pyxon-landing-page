import { Grid, Text } from '@mantine/core'
import FeatureIcons from './FeatureIcons'
import FeatureContent from './FeatureContent'
import { FeatureItemProps } from './FeatureItem'

const FeatureGridRight = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <>
      <Grid.Col span={{ base: 12, lg: 4, md: 4, sm: 12, xs: 12 }}>
        <FeatureIcons icon={icon} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 8, md: 8, sm: 12, xs: 12 }}>
        <Text>
          <FeatureContent title={title} description={description} />
        </Text>
      </Grid.Col>
    </>
  )
}
export default FeatureGridRight
