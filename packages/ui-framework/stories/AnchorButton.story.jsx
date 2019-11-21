import React from "react";
import { storiesOf } from "@storybook/react";
import { AnchorButton } from "../src/index";

storiesOf("AnchorButton", module)
  .add("primary", () => (
    <AnchorButton href="https://www.google.com/" target="_blank">
      Call to Action
    </AnchorButton>
  ))
  .add("secondary", () => (
    <AnchorButton
      href="https://www.google.com/"
      target="_blank"
      type="secondary"
    >
      Call to Action
    </AnchorButton>
  ));
