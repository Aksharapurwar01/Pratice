import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { handleInitialData } from "./actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/" exact element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default connect()(App);
