
import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'


import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// context API
import DataProvider from './context/DataProvider'


const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'sans - serif'
    ].join(','),
  },
});


function App() {
  return (

    <ThemeProvider theme={theme}>

      <DataProvider>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Home />
        </Box>
      </DataProvider >

    </ThemeProvider>
  );
}

export default App;
