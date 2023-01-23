import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("Nav component has three nav links", () => {
  const logout = {};
  render(
    <Router>
      <Navbar currentUser="test" logout={logout} />
    </Router>
  );

  let navLinks = screen.queryAllByTestId("nav-link");
  expect(navLinks.length).toBe(3);
});

test("Nav component has three nav links", () => {
  const logout = {};
  render(
    <Router>
      <Navbar currentUser="test" logout={logout} />
    </Router>
  );

  let navLinks = screen.queryAllByTestId("nav-link");
  expect(navLinks.length).toEqual(3);
});
