import React from "react";
import { storiesOf } from "@storybook/react";
import { Paragraph, Colors } from "../src/index";

storiesOf("Paragraph", module)
  .add("basic", () => <Paragraph>Components are here to stay</Paragraph>)
  .add("styled", () => (
    <Paragraph style={{ color: Colors.primary }}>
      Components are here to stay
    </Paragraph>
  ))
  .add("type bold", () => (
    <Paragraph type="bold">Components are here to stay</Paragraph>
  ));
