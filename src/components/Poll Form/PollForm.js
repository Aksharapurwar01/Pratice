import React from "react";
import { connect } from "react-redux";
import "./PollForm.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { handleAddAnswer } from "../../actions/questions";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { RadioGroup, Radio } from "react-radio-group";

function PollForm(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [optionSelected, setOptionSelected] = useState("");

  const pollQuestionData = {
    authorId: props.questions[id].author,
    authorName: props.users[props.questions[id].author].name,
    authorAvatar: props.users[props.questions[id].author].avatarURL,
    optionOne: props.questions[id].optionOne,
    optionTwo: props.questions[id].optionTwo,
  };

  const handleInput = (value) => {
    setOptionSelected(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleAddAnswer({ optionSelected, id }));
    navigate(`/question/${id}/result`);
  };
  return (
    <>
      <Card
        key={pollQuestionData.authorId}
        sx={{ maxWidth: 345 }}
        className="card-poll"
      >
        <CardMedia
          component="img"
          alt="avatar"
          height="140"
          image={pollQuestionData.authorAvatar}
          className="avatar-leader"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
            {pollQuestionData.authorName} asks:
          </Typography>
          <Typography variant="h6" color="black">
            <strong>
              Would you rather......{pollQuestionData.optionOne.text} or{" "}
              {pollQuestionData.optionTwo.text}
            </strong>
          </Typography>
          <div className="container row">
            <RadioGroup
              name="selectedOption"
              selectedValue={optionSelected}
              onChange={handleInput}
            >
              <div className="radio-option">
                <Radio value="optionOne" />
                <label>{pollQuestionData.optionOne.text}</label>
              </div>
              <div className="radio-option">
                <Radio value="optionTwo" />
                <label>{pollQuestionData.optionTwo.text}</label>
              </div>
            </RadioGroup>
          </div>

          <CardActions>
            <Button
              type="submit"
              variant="contained"
              className="primary-button"
              disabled={optionSelected === ""}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </CardActions>
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

export default connect(mapStateToProps)(PollForm);
