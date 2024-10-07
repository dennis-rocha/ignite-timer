import './App.css'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button varient="primary" />    
      <Button varient='warning'/>    
      <Button varient='success'/>    
    </ThemeProvider>
  )
}
