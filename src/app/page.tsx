'use client'

import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 650px;
  margin: 0 auto;
  padding: 2rem;
`

export default function Page() {
  return <Main>Hello, world!</Main>
}
