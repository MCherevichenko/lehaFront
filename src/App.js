import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthHeader from "./components/AuthHeader";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/UserFlow/About";
import CreateOrder from "./components/UserFlow/CreateOrder";
import MainPage from "./components/UserFlow/MainPage";
import Money from "./components/UserFlow/Money";
import MyOrders from "./components/UserFlow/MyOrders";
import UserPage from "./components/UserFlow/UserPage";

import { useAppDispatch } from "./store";

function App() {
  const isLoggedIn = useSelector(
    (state) => !!state.auth.authData.accessToken
  );

  const dispatch = useAppDispatch();

  return (
    <Router>
      <AuthHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <UserPage /> : <Navigate to="/" />}
        />
        <Route 
          path="/create" 
          element={isLoggedIn ? <CreateOrder /> : <Navigate to="/" />}
        />
        <Route 
          path="/money" 
          element={isLoggedIn ? <Money /> : <Navigate to="/" />}
        />
        <Route 
          path="/myorders" 
          element={isLoggedIn ? <MyOrders /> : <Navigate to="/" />} 
        />
        <Route
          path="/about" 
          element={isLoggedIn ? <About /> : <Navigate to="/" />}
        />
        <Route
          path="/reg"
          element={isLoggedIn ? <Navigate to="/" /> : <Registration />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;