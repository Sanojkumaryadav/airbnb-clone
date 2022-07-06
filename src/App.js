import Navbar from "./components/Navbar";
import "./App.css";
import LoginFirstPage from "./pages/LoginFirstPage"
import Login from "./pages/Login";
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Otp from "./pages/Otp"
import PlaceDetails from "./components/PlaceDetails"
import NotFound from "./components/NotFound"
import { RequestToBook } from "./components/RequestToBook";
import { Home } from './components/Homepage/Home/Home';
import  Cards  from './components/Cards';
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


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
      <div>
        <Navbar user={user} />
        
    
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path = "/" element = {<Cards />}></Route>
          <Route path  ="/RequestToBook"   element={<RequestToBook />}></Route>

          <Route path = "/islands/:islandId" element = {<PlaceDetails />}></Route>

          <Route path = "*" element = {<NotFound />}></Route>
          <Route path="/" element={user ? <Navbar /> :<LoginFirstPage /> } ></Route>
          <Route path="/login" element={user ? <LoginFirstPage /> : <Login />}></Route> 
          <Route path="/otp" element={<Otp />}></Route> 
        </Routes>
        
      </div>
  );
};

export default App;
