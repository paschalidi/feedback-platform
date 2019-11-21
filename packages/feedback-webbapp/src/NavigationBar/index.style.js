import styled from "styled-components";
import { Colors } from "@simple/components";

const Styles = styled.div`
  height: 75px;
  background-color: ${Colors.background};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const NavItem = styled.div`
  a {
    color: inherit;
    text-decoration: none !important;
    font-weight: ${props => (props.active ? 500 : 400)};
  }
`;

const LogoutItem = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.15em;
  color: #59636e;
`;

export { Styles, NavItem, LogoutItem };
