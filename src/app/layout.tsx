import type { Metadata } from 'next'

import './globals.css'
import '../app/page.module.css'

import '@mantine/core/styles.css'

import { MantineProvider, ColorSchemeScript, Paper } from '@mantine/core'

export const metadata: Metadata = {
  title: 'Pyxon Solutions',
  description: 'Pyxon Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          <Paper p="0" radius={0} style={{ minHeight: '100vh' }}>
            {children}
          </Paper>
        </MantineProvider>
      </body>
    </html>
  )
}
