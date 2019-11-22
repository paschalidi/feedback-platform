import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "react-user-avatar";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import Caption from "../Caption";
import Colors from "../Colors";
import H3 from "../H3";
import { FeedbackRadioQuestion } from "./FeedbackRadioQuestion";
import { FeedbackTextQuestion } from "./FeedbackTextQuestion";
import { FeedbackScaleQuestion } from "./FeedbackScaleQuestion";

const TableStyles = styled.div`
  flex: 1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${Colors.divider};
`;

const CaptionStyles = styled.div`
  padding: 12px 0 14px 13px;
  border-bottom: 1px solid ${Colors.divider};
`;

const FeedbackStyles = styled.div`
  padding: 18px 0 18px 26px;
  border-bottom: 1px solid ${Colors.divider};
  border-left: 1px solid ${Colors.divider};
`;

const UserInfoStyles = styled.div`
  cursor: pointer;
  height: 96px;
  border-bottom: 1px solid ${Colors.divider};
  &:hover {
    background-color: ${props =>
      props.active ? `${Colors.background}` : `${Colors.primaryDim}`};
  }

  background: ${props => (props.active ? `${Colors.background}` : "inherit")};
`;

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
                {information.map((user, index) => (
                  <UserInfoStyles
                    active={user.id === selectedUser}
                    onClick={() => this.setSelectedUser(user.id)}
                  >
                    <Row verticalAlign="middle">
                      <Col offset={1} lg={3}>
                        <Avatar size="58" name={user.username} />
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
export default FeedbackTable;
