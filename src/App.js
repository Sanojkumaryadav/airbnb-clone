import React from 'react';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Homepage/Home/Home';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    // <ChakraProvider theme={theme}>
         // {/* <ColorModeSwitcher justifySelf="flex-end" /> */}


          <div className="App">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
            </Routes>
          </div>




    // </ChakraProvider>
  );
}

export default App;
