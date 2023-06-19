import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './context/AuthContext'
import { UserContextProvider } from './context/UserContext'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { Provider  } from 'react-redux'
import store from './redux/store'

const colors = {
  brand: {
    900: '#2a68ff',
    800: '#ae66fa',
    700: '#ebd9ff',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <UserContextProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>  
      </ChakraProvider> 
    </UserContextProvider>     
  </AuthContextProvider>
  
)
