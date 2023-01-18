import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import NewQues from "./components/New ques/NewQues";
import LoadingBar from "react-redux-loading-bar";
import { setAuthedUser } from "../src/actions/authedUser";

function App(props) {
  console.log("props", props);
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const logout = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(null));
  };
  return (
    <Fragment>
      <LoadingBar />
      <div>
        {props.loading === true ? (
          <Login />
        ) : (
          <div>
            <Navbar currentUser={props.currentUser} logout={logout} />
            <Routes>
              <Route path="/" exact element={<Dashboard />}></Route>
              <Route
                path="/leaderboard"
                exact
                element={<Leaderboard />}
              ></Route>
              <Route path="/add" exact element={<NewQues />}></Route>
              <Route path="*" element={<p>404! page not found</p>} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser, users }) => ({
  loading: authedUser === null,
  currentUser: users[authedUser],
  authedUser,
});

export default connect(mapStateToProps)(App);
