import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function AnchorButton({
  id,
  onClick,
  type,
  href,
  target,
  rel,
  children,
  style,
  className
}) {
  return (
    <ButtonStyles>
      <a
        id={id}
        className={`${className} ${type}`}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        style={style}
      >
        <div className="component-child">{children}</div>
      </a>
    </ButtonStyles>
  );
}

AnchorButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  style: PropTypes.shape({}),
  className: PropTypes.string
};

AnchorButton.defaultProps = {
  id: null,
  type: "primary",
  onClick: () => {},
  target: "_self",
  rel: null,
  style: {},
  className: ""
};
