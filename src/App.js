import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import NewQues from "./components/New ques/NewQues";
import LoadingBar from "react-redux-loading-bar";
import { setAuthedUser } from "../src/actions/authedUser";
import PollResult from "./components/PollResult/PollResult";
import PollForm from "./components/Poll Form/PollForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  const logout = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(""));
  };
  return (
    <Fragment>
      <LoadingBar />
      <>
        {props && props.authedUser && props.authedUser.length ? (
          <Navbar currentUser={props.currentUser} logout={logout} />
        ) : null}

        {props.loading === true ? null : (
          <>
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route element={<ProtectedRoute user={props.authedUser} />}>
                <Route path="/" exact element={<Dashboard />}></Route>
                <Route path="/leaderboard" exact element={<Leaderboard />} />
                <Route path="/add" exact element={<NewQues />} />
                <Route
                  path="/questions/:id/result"
                  exact
                  element={<PollResult />}
                />
                <Route exact path="/questions/:id" element={<PollForm />} />
              </Route>
              <Route path="*" element={<p>404! page not found</p>} />
            </Routes>
          </>
        )}
      </>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser, users }) => ({
  loading: JSON.stringify(users) === JSON.stringify({}),
  currentUser: users[authedUser],
  authedUser,
});

export default connect(mapStateToProps)(App);
