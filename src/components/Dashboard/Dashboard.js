import React from "react";
import { connect } from "react-redux";
import Ques from "../Questions/Ques";
import "./Dashboard.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Dashboard(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "445px",
            margin: "auto",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Unanswered Questions" {...a11yProps(0)} />
            <Tab label="Answeresd Questions" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ul className="questions">
            {props.unansweredQuestionIds.map((id) => (
              <Ques key={id} id={id} />
            ))}
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ul className="questions">
            {props.answeredQuestionIds.map((id) => (
              <Ques key={id} id={id} />
            ))}
          </ul>
        </TabPanel>
      </Box>
    </>
  );
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const answeredQuestionIds = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestionIds = Object.keys(questions)
    .filter((q) => !answeredQuestionIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
};

Dashboard.propTypes = {
  users: PropTypes.object,
  authedUser: PropTypes.string,
  questions: PropTypes.object,
};

export default connect(mapStateToProps)(Dashboard);
