import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import "./Leaderboard.css";

function Leaderboard(props) {
  return (
    <>
      {props.leaderboardData
        ? props.leaderboardData.map((user) => (
            <Card key={user.id} sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={user.avatarURL}
                className="avatar-leader"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  answeredQuestions:{user.answeredQuestions}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  createdQuestions:{user.createdQuestions}
                </Typography>
              </CardContent>
            </Card>
          ))
        : null}
    </>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  const leaderboardData = Object.keys(users)
    .map((user) => ({
      id: user,
      name: users[user].name,
      avatarURL: users[user].avatarURL,
      answeredQuestions: Object.keys(users[user].answers).length,
      createdQuestions: Object.keys(questions).filter(
        (q) => questions[q].author === user
      ).length,
    }))
    .sort(
      (a, b) =>
        b.answeredQuestions +
        b.createdQuestions -
        (a.answeredQuestions + a.createdQuestions)
    );
  return {
    authedUser,
    leaderboardData,
  };
};

export default connect(mapStateToProps)(Leaderboard);
