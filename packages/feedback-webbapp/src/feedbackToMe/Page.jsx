import React from "react";
import PropTypes from "prop-types";
import { merge } from "rxjs";
import { rxConnect } from "rx-connect-clone";
import {
  distinctUntilChanged,
  ignoreElements,
  pluck,
  tap
} from "rxjs/operators";
import { connect } from "react-redux";
import { FeedbackTable, Row, Col, H2 } from "@simple/components";
import { FETCH_TO_ME_FEEDBACK } from "./actionTypes";

const Page = ({ toMeFeedback }) => {
  return (
    <div>
      <Row>
        <Col>
          <H2>My Feedback</H2>
          {Object.values(toMeFeedback).length ? (
            <FeedbackTable
              title="Feedback Received"
              information={toMeFeedback}
            />
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

Page.propTypes = {
  toMeFeedback: PropTypes.arrayOf({
    id: PropTypes.number,
    username: PropTypes.string,
    feedback: PropTypes.shape({})
  }).isRequired.isRequired
};

const mapProps = props$ => {
  return merge(
    props$,
    props$.pipe(
      pluck(0),
      distinctUntilChanged(),
      tap(() => {
        const { dispatch } = props$.value;
        dispatch({ type: FETCH_TO_ME_FEEDBACK });
      }),
      ignoreElements()
    )
  );
};

const mapStateToProps = ({ toMeFeedbackReducer }) => ({
  toMeFeedback: toMeFeedbackReducer
});

export default connect(mapStateToProps)(rxConnect(mapProps)(Page));
