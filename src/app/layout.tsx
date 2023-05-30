import React from 'react'
import { Open_Sans as OpenSans } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

const openSans = OpenSans({ weight: ['400', '500'], subsets: ['latin'] })

export const metadata = {
  title: "Zeke's React Examples",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
