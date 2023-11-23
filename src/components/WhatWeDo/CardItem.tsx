import React from 'react'
import { Card, Image, Text, Group } from '@mantine/core'
import styles from './CardItem.module.css'

interface CardItemProps {
  imageSrc: string
  title: string
  description: string
}

const CardItem = ({ imageSrc, title, description }: CardItemProps) => (
  <Card className={styles.card}>
    <Card.Section>
      <Image src={imageSrc} className={styles.image} alt={title} />
    </Card.Section>

    <Group className={styles.group}>
      <Text className={styles.title}>{title}</Text>
    </Group>

    <Text className={styles.content}>{description}</Text>
  </Card>
)

export default CardItem
