import React from "react";
import { AboutMe } from "../components/AboutMe";

export default {
  title: "AboutMe",
  component: AboutMe,
  decorators: [
    (Story) => (
      <div className="bg-sky-950">
        <Story />
      </div>
    ),
  ],
}

export const Primary = {
  args: {
    primary: true,
    label: "AboutMe",
  },
};