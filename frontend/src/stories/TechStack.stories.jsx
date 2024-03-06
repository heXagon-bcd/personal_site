import React from "react";
import { TechStack } from "../components/TechStack";

export default {
  title: "TechStack",
  component: TechStack,
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
    label: "TechStack",
  },
};
