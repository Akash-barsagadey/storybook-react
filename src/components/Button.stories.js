import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import {
  withLiveEditScope,
  withLiveEdit,
} from "storybook-addon-react-live-edit";

export default {
  title: "Button",
  component: Button,
  decorators: [
    (story) => withLiveEditScope({ React, Button })(story, { React, Button }),
  ],
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const LiveEditComponent = (story) =>
  withLiveEdit(`return <Button >Hello Button</Button>`)(story);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
