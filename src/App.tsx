import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'


function App() {
 return (
  <ThemeProvider theme={defaultTheme}>
   <Button variant='primary'/>
   <Button variant='secondary'/>
   <Button variant='sucess'/>
   <Button variant='danger'/>

   <GlobalStyle/>
  </ThemeProvider>
 )
}

export default App
