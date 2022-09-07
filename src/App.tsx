import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#47585B',
        backgroundColor: '#F5F8FA',
      },
    },
  },
  colors: {
    brand: {
      500: '#FFBA08',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
