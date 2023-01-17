import React from "react";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import Ques from "../Questions/Ques";
import './Dashboard.css';

function Dashboard(props) {
  console.log(props, "props");
  return (
    <>
      {/* <Navbar /> */}
      <ul className="questions">
        {props.questionIds.map((id) => (
          <Ques key={id} id={id} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
