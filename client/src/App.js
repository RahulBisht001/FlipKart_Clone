import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Detailview from './components/Details/Detailview'


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
    <DataProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>


          <Header />
          <Box style={{ marginTop: 55 }}>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/product/:id'
                element={<Detailview />}
              />
            </Routes>

          </Box>

        </ThemeProvider>
      </BrowserRouter>
    </DataProvider >
  );
}

export default App;
