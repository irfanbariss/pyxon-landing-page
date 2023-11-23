import { Container, Grid } from '@mantine/core'
import styles from './WhatWeDo.module.css'
import { data } from './whatWeDoData'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'

const WContent = () => {
  return (
    <Container fluid>
      <Grid gutter={'lg'} justify="center">
        {data.map((item, title) => (
          <Grid.Col key={title} span={{ base: 12, md: 4, sm: 4, xs: 4 }}>
            <CardItem {...item} />
          </Grid.Col>
        ))}
        <Grid.Col>
          <Link to="/products">
            <button className={styles.btn}>Discover our products</button>
          </Link>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
export default WContent
