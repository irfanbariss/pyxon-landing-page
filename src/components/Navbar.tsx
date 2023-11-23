'use client'
import Image from 'next/image'
import { Drawer, Container, Grid, Text, Burger } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { NavLink as RouterLink } from 'react-router-dom'
import LightDarkBtn from './LightDarkBtn'

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <>
      <div className="navbar">
        <RouterLink to="/">
          <Image
            src="/logo-with-favicon.png"
            alt="logo"
            width={200}
            height={100}
          />
        </RouterLink>
        <div className="navbar-links">
          {isMobile && (
            <div className="navbar">
              <button onClick={open} aria-label="Toggle navigation">
                {' '}
                \\\
              </button>
            </div>
          )}
          {!isMobile && (
            <>
              <RouterLink to="/about" className="nav-link">
                About Us
              </RouterLink>
              <RouterLink to="/products" className="nav-link">
                Products
              </RouterLink>
              <RouterLink to="/contact" className="nav-link">
                Contact
              </RouterLink>
            </>
          )}
          <LightDarkBtn />
        </div>
      </div>

      <Drawer opened={opened} onClose={close} padding="md">
        <Container size="xl">
          <Grid gutter="md">
            <Grid.Col span={12}>
              <Text>Home</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text>About Us</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text>Contact</Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Drawer>
    </>
  )
}
export default Navbar
