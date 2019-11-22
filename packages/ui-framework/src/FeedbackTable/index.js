import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-user-avatar";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import Caption from "../Caption";
import Colors from "../Colors";
import H3 from "../H3";
import { FeedbackRadioQuestion } from "./FeedbackRadioQuestion";
import { FeedbackTextQuestion } from "./FeedbackTextQuestion";
import { FeedbackScaleQuestion } from "./FeedbackScaleQuestion";
import {
  CaptionStyles,
  TableStyles,
  FeedbackStyles,
  UserInfoStyles
} from "./styles";

class FeedbackTable extends React.Component {
  state = { selectedUser: 1 };

  setSelectedUser = id => this.setState({ selectedUser: id });

  renderComponentOfType = (type, question, answer, text) => {
    switch (type) {
      case "radio":
        return (
          <FeedbackRadioQuestion
            question={question}
            answer={answer}
            text={text}
          />
        );

      case "text":
        return (
          <FeedbackTextQuestion
            question={question}
            answer={answer}
            text={text}
          />
        );

      case "scale":
        return (
          <FeedbackScaleQuestion
            question={question}
            answer={answer}
            text={text}
          />
        );

      default:
        return <div />;
    }
  };

  render() {
    const { title, information } = this.props;
    const { selectedUser } = this.state;
    const feedbackPerUser = information.reduce((acc, user) => {
      return { ...acc, [user.id]: user.feedback };
    }, {});

    return (
      <Row>
        <Col lg={12}>
          <TableStyles>
            <Row>
              <Col lg={4}>
                <CaptionStyles>
                  <Caption>{title}</Caption>
                </CaptionStyles>
                {information.map(user => (
                  <UserInfoStyles
                    active={user.id === selectedUser}
                    onClick={() => this.setSelectedUser(user.id)}
                  >
                    <Row verticalAlign="middle">
                      <Col offset={1} lg={3}>
                        <Avatar
                          color={Colors.affirmative}
                          size="58"
                          name={user.username}
                        />
                      </Col>
                      <Col lg={8}>{user.username}</Col>
                    </Row>
                  </UserInfoStyles>
                ))}
              </Col>
              <Col lg={8}>
                <FeedbackStyles>
                  <H3 style={{ margin: 0 }}>Feedback</H3>
                </FeedbackStyles>
                {selectedUser &&
                  feedbackPerUser[selectedUser].map(
                    ({ type, question, answer, text }) => {
                      switch (type) {
                        case "radio":
                          return (
                            <FeedbackRadioQuestion
                              question={question}
                              answer={answer}
                              text={text}
                            />
                          );

                        case "text":
                          return (
                            <FeedbackTextQuestion
                              question={question}
                              answer={answer}
                              text={text}
                            />
                          );

                        case "scale":
                          return (
                            <FeedbackScaleQuestion
                              question={question}
                              answer={answer}
                              text={text}
                            />
                          );

                        default:
                          return <div />;
                      }
                    }
                  )}
              </Col>
            </Row>
          </TableStyles>
        </Col>
      </Row>
    );
  }
}

FeedbackTable.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf({
    id: PropTypes.number,
    username: PropTypes.string,
    feedback: PropTypes.shape({})
  }).isRequired
};

export default FeedbackTable;
