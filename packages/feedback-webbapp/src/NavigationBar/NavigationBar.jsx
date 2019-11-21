import React from "react";
import PropTypes from "prop-types";
import { Col, H3, Row, Tiny } from "@simple/components";
import { Link, withRouter } from "react-router-dom";
import { Styles, NavItem, LogoutItem } from "./index.style";

const NavigationBar = ({ menuItems, location }) => (
  <Styles>
    <Row position="start" verticalAlign="middle" textAlign="center">
      <Col lg={3}>
        <H3>Honesto</H3>
      </Col>
      {Object.values(menuItems).map(item => (
        <Col lg={2} key={item.route}>
          <NavItem active={item.route === location.pathname}>
            <Link to={item.route}>{item.title}</Link>
          </NavItem>
        </Col>
      ))}
      <Col lg={1} offset={2}>
        <div style={{ textAlign: "right " }}>
          <Tiny>Next Feedback Circle:</Tiny>
          <div>in 4 days</div>
        </div>
      </Col>
      <Col lg={2}>
        <LogoutItem
          type="button"
          onClick={() => alert("You have been logged out")}
        >
          LOGOUT
        </LogoutItem>
      </Col>
    </Row>
  </Styles>
);

NavigationBar.propTypes = {
  menuItems: PropTypes.shape({
    title: PropTypes.string,
    route: PropTypes.string
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

export default withRouter(NavigationBar);
