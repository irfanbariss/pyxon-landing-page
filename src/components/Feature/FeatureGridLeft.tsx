import { Grid, Text } from '@mantine/core'
import FeatureContent from './FeatureContent'
import FeatureIcons from './FeatureIcons'
import { FeatureItemProps } from './FeatureItem'

const FeatureGridLeft = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <>
      <Grid.Col span={{ base: 12, lg: 8, md: 8, sm: 12, xs: 12 }}>
        <Text>
          <FeatureContent title={title} description={description} />
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 4, md: 4, sm: 12, xs: 12 }}>
        <FeatureIcons icon={icon} />
      </Grid.Col>
    </>
  )
}
export default FeatureGridLeft
