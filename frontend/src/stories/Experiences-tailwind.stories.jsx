import React from "react";
import { Experiences } from "../components/Experiences";

export default {
  title: "Experiences",
  component: Experiences,
  decorators: [
    (Story) => (
      <div className="bg-sky-950">
        <Story />
      </div>
    ),
  ],
};

export const Primary = {
  args: {
    primary: true,
    label: "Experiences",
  },
};
