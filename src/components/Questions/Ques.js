import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ques.css";
import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../../utils/helpers";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

function Ques(props) {
  const { name, id, avatar, timestamp, optionOne, optionTwo,hasVoted } = props.question;
  const navigate = useNavigate();

  const showPoll = () => {
    if (hasVoted) {
        navigate(`/question/${id}/result`);
    } else {
        navigate(`/question/${id}`);
    }
}
  return (
    <>
      <Card
        sx={{ minWidth: 275, textAlign: "center", border: "1px solid lightgrey" }}
      >
        <CardContent>
          <CardMedia
            sx={{ height: 140 }}
            image={avatar}
            title="avatar"
            className="avatar"
          />
          <Typography
            sx={{ fontSize: 18, fontWeight: 700 }}
            color="black"
            gutterBottom
          >
            {name} asks
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {formatDate(timestamp)}
          </Typography>
          <Typography>
        
            {optionOne && optionOne.text}
            <br />
            <strong>OR</strong>
            <br />
            {optionTwo && optionTwo.text}
          </Typography>
        </CardContent>
        <CardActions className="buttom-poll">
          <Button size="medium" variant="contained" onClick={showPoll}>
            Show Poll
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};

export default connect(mapStateToProps)(Ques);
