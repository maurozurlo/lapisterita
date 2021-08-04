import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { Footer, Navbar } from './components'
import { useDarkMode } from './hooks/useDarkMode'
import { lightTheme, darkTheme, } from './style/theme'
import { GlobalStyles } from './style/global'

// Views
import { Home, Work } from './views/'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/work/:id">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App