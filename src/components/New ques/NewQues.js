import React from "react";
import "./NewQues.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../../actions/questions";
import { useState } from "react";

function NewQues(props) {
  const navigate = useNavigate();
  const [optionOneText, setoptionOneText] = useState("");
  const [optionTwoText, setoptionTwoText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleAddQuestion({ optionOneText, optionTwoText }));
    navigate("/");
  };
  return (
    <div>
      <Card sx={{ maxWidth: 600 }} className="centered">
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Create a new Question
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Would you rather...
          </Typography>

          <form>
            <TextField
              id="outlined-helperText"
              label="option1"
              value={optionOneText}
              fullWidth
              data-testid='input-one'
              onChange={(e) => {
                setoptionOneText(e.target.value.trimStart());
              }}
              className="option"
              placeholder="option1"
            />
            <TextField
              id="outlined-helperText"
              label="option2"
              value={optionTwoText}
              fullWidth
              data-testid='input-two'
              onChange={(e) => {
                setoptionTwoText(e.target.value.trimStart());
              }}
              className="option"
              placeholder="option2"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            disabled={optionOneText.length === 0 || optionTwoText.length === 0}
            onClick={(e) => {
              handleSubmit(e);
            }}
            data-testid='submit-button'
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default connect()(NewQues);
