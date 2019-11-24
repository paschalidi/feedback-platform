import React from "react";
import { merge } from "rxjs";
import {
  distinctUntilChanged,
  ignoreElements,
  pluck,
  tap
} from "rxjs/operators";
import { connect } from "react-redux";
import { rxConnect } from "rx-connect-clone";
import { Row, Col, Colors, Button, H2 } from "@simple/components";
import UserAvatar from "react-user-avatar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FETCH_SHARE_FEEDBACK } from "./actionTypes";

const TableStyles = styled.div`
  flex: 1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${Colors.divider};
`;
const RowStyles = styled.div`
  height: 92px;
  border-bottom: 1px solid ${Colors.divider};
`;

const ShareFeedbackList = ({ shareFeedback }) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <H2>Share Feedback</H2>
          {Object.values(shareFeedback).length ? (
            <TableStyles>
              {Object.values(shareFeedback).map(userInfo => (
                <RowStyles key={userInfo.id}>
                  <Row verticalAlign="middle">
                    <Col lg={2}>
                      <UserAvatar
                        style={{ marginLeft: 20 }}
                        size="58"
                        name={userInfo.username}
                      />
                    </Col>
                    <Col lg={7}>{userInfo.username}</Col>
                    <Col lg={3}>
                      <Link
                        to={{
                          pathname: `/share-feedback/${userInfo.id}`,
                          state: { userInfo }
                        }}
                      >
                        <Button style={{ marginRight: 20, float: "right" }}>
                          Fill Out
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </RowStyles>
              ))}
            </TableStyles>
          ) : null}
        </Col>
      </Row>
    </React.Fragment>
  );
};

const mapProps = props$ => {
  return merge(
    props$,
    props$.pipe(
      pluck(0),
      distinctUntilChanged(),
      tap(() => {
        const { dispatch } = props$.value;
        dispatch({ type: FETCH_SHARE_FEEDBACK });
      }),
      ignoreElements()
    )
  );
};

const mapStateToProps = ({ shareFeedbackReducer }) => ({
  shareFeedback: shareFeedbackReducer
});

export default connect(mapStateToProps)(rxConnect(mapProps)(ShareFeedbackList));
