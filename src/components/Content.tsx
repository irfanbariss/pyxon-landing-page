import Feature from './Feature/Feature'
import Section from './Section/Section'
import { Container, Paper } from '@mantine/core'
import WFeature from './WhatWeDo/WFeature'
import styles from './Content.module.css'

const Content = () => {
  return (
    <>
      <Container className={styles.container} fluid>
        <Section
          title="About Us"
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab aperiam vel optio laboriosam veritatis recusandae, nostrum tenetur, maiores assumenda necessitatibus obcaecati, animi ipsam. Quos sint deserunt veritatis architecto iste repellat labore nesciunt iure dolor laudantium commodi, molestias perspiciatis, minima quo ipsa non qui impedit consequuntur? Quam obcaecati magnam architecto.'
          }
        >
          <Feature />
        </Section>

        <Section
          title={'What We Do'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab aperiam vel optio laboriosam veritatis recusandae, nostrum tenetur, maiores assumenda necessitatibus obcaecati, animi ipsam. Quos sint deserunt veritatis architecto iste repellat labore nesciunt iure dolor laudantium commodi, molestias perspiciatis, minima quo ipsa non qui impedit consequuntur? Quam obcaecati magnam architecto.'
          }
        >
          <WFeature />
        </Section>
      </Container>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#16072d"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  )
}
export default Content
