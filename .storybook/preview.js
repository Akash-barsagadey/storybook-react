import "../src/index.css";
import { addParameters } from "@storybook/react";
import { setAddon } from "@storybook/react";
import LiveEdit, { setOptions } from "storybook-addon-react-live-edit";

setOptions({ presets: ["react"] });

setOptions({ theme: "darcula", presets: ["react"] });

setAddon(LiveEdit);

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "red" },
  ],
});
