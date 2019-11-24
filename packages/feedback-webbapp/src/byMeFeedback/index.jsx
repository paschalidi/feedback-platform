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
import { FETCH_BY_ME_FEEDBACK } from "./actionTypes";

const Index = ({ byMeFeedback }) => {
  return (
    <div>
      <Row>
        <Col>
          <H2>My Feedback</H2>
          {Object.values(byMeFeedback).length ? (
            <FeedbackTable
              title="Feedback Received"
              information={byMeFeedback}
            />
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

Index.propTypes = {
  byMeFeedback: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapProps = props$ => {
  return merge(
    props$,
    props$.pipe(
      pluck(0),
      distinctUntilChanged(),
      tap(() => {
        const { dispatch } = props$.value;
        dispatch({ type: FETCH_BY_ME_FEEDBACK });
      }),
      ignoreElements()
    )
  );
};

const mapStateToProps = ({ byMeFeedbackReducer }) => ({
  byMeFeedback: byMeFeedbackReducer
});

export default connect(mapStateToProps)(rxConnect(mapProps)(Index));
