import { ThemeProvider } from 'styled-components'
import { ButtonContainer } from './components/Button.styles'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

// import { useState } from 'react'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonContainer variant="primary" />

      <GlobalStyle />
    </ThemeProvider>
  )
}
