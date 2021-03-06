import { ThemeProvider } from 'styled-components'
import { CycleContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>
    </ThemeProvider>
  )
}
