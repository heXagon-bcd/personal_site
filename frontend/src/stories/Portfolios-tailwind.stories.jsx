import React from "react";
import { Portfolio } from "../components/Portfolio";

export default {
  title: "Portfolio",
  component: Portfolio,
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
    label: "Portfolio",
  },
};