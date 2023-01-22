import React from "react";
import "./PollResult.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PollResult(props) {
  let { id } = useParams();

  const pollResultObj = {
    authorId: props.questions[id].author,
    authorName: props.users[props.questions[id].author].name,
    authorAvatar: props.users[props.questions[id].author].avatarURL,
    optionOne: props.questions[id].optionOne,
    optionTwo: props.questions[id].optionTwo,
    totalVotes:
      props.questions[id].optionOne.votes.length +
      props.questions[id].optionTwo.votes.length,
    myVote: props.users[props.authedUser].answers[id],
  };

  const calculatePercentage = (count, totalCount) => {
    if (totalCount !== 0) {
      return Math.round((count / totalCount) * 100);
    } else {
      return "0";
    }
  };

  return (
    <>
      <Card
        key={pollResultObj.authorId}
        sx={{ maxWidth: 345 }}
        className="card-poll"
      >
        <CardMedia
          component="img"
          alt="avatar"
          height="140"
          image={pollResultObj.authorAvatar}
          className="avatar-leader"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pollResultObj.authorName} asks:
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <strong>
              Would you rather......{pollResultObj.optionOne.text} or{" "}
              {pollResultObj.optionTwo.text}
            </strong>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            YOUR VOTE: {pollResultObj.myVote}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <strong>optionOne:{pollResultObj.optionOne.text}</strong>
            <br />
            <span>
              <strong>1.Votes : </strong>
              {pollResultObj.optionOne.votes.length}
            </span>
            <br />
            <span>
              <strong>2.Percentage:</strong>
              {calculatePercentage(
                pollResultObj.optionOne.votes.length,
                pollResultObj.totalVotes
              )}
              %
            </span>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <strong>optionTwo:{pollResultObj.optionTwo.text}</strong>
            <br />
            <span>
              <strong>1.Votes : </strong>
              {pollResultObj.optionTwo.votes.length}
            </span>
            <br />
            <span>
              <strong>2.Percentage:</strong>
              {calculatePercentage(
                pollResultObj.optionTwo.votes.length,
                pollResultObj.totalVotes
              )}
              %
            </span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions,
  };
};

export default connect(mapStateToProps)(PollResult);
