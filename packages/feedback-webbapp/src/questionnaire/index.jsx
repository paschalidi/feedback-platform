import React, { useState } from "react";
import { Multistep, RadioGroup, Textarea, Scale } from "@simple/components";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const Questionnaire = ({ location, history }) => {
  const {
    state: { userInfo }
  } = location;

  const [answers, setAnswer] = useState({});

  const handleSetAnswer = (id, question, text, type) => {
    setAnswer({ ...answers, [id]: { text, question, type } });
  };

  const feedbackIncrementallyOrdered = userInfo.feedback
    .sort((a, b) => a.order - b.order)
    .reduce((acc, item, index) => {
      return { ...acc, [index]: { ...item, incrementedOrder: index } };
    }, {});

  return (
    <div style={{ marginTop: 75 }}>
      <Multistep
        length={Object.values(feedbackIncrementallyOrdered).length}
        handleSubmit={() => {
          history.push("/success-feedback");
        }}
        feedback={feedbackIncrementallyOrdered}
        username={userInfo.username}
      >
        {currentStep => {
          const { question, id } = feedbackIncrementallyOrdered[currentStep];
          switch (feedbackIncrementallyOrdered[currentStep].type) {
            case "text":
              return (
                <Textarea
                  onAnswer={({ text }) =>
                    handleSetAnswer(id, question, text, "text")
                  }
                />
              );
            case "scale":
              return (
                <Scale
                  onAnswer={({ scale }) =>
                    handleSetAnswer(id, question, scale, "scale")
                  }
                />
              );
            case "radio": {
              return (
                <RadioGroup
                  onAnswer={answer =>
                    handleSetAnswer(id, question, answer, "radio")
                  }
                  choices={feedbackIncrementallyOrdered[currentStep].answers}
                />
              );
            }
            default:
              return <div />;
          }
        }}
      </Multistep>
    </div>
  );
};

Questionnaire.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      userInfo: PropTypes.shape({
        id: PropTypes.number,
        feedback: PropTypes.array,
        username: PropTypes.string
      })
    })
  }).isRequired
};

export default withRouter(Questionnaire);
