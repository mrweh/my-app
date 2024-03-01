import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  theme
} from '@chakra-ui/react';
import Politics from "./components/politics";
import Sport from "./components/sport";
import Media from "./components/media";
import Economy from "./components/economy";
import MainPage from "./components/MainPage";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bgGradient='linear(to-l, #7928CA, gray.500)'>
        <BrowserRouter>
          <Grid p="20px">
                <Flex margin="20px" spacing='5px' justifyContent={'space-evenly'}>
                  <NavLink exact to="/">Main</NavLink>
                  <NavLink to="/politics">Politics</NavLink>
                  <NavLink to="/sport">Sport</NavLink>
                  <NavLink to="/media">Media</NavLink>
                  <NavLink to="/economy">Economy</NavLink>
                </Flex>
                <Grid minH="95vh" spacing='2px' align={'left'} alignContent='space-between'>
                  <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/politics" element={<Politics/>} />
                    <Route path="/sport" element={<Sport />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/economy" element={<Economy />} />
                  </Routes>
                </Grid> 
          </Grid>
        </BrowserRouter> 
      </Box>
    </ChakraProvider>
  );
}

export default App;
