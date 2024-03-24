import React from "react";
import { Experiences } from "../components/Experiences";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: "Experiences",
  component: Experiences,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'responsive',
    },
  },
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

export const PhoneView = {
  args: {
    primary: true,
    label: "Experiences",
  },
  parameters: { viewport: { defaultViewport: 'iphone14promax', }},
};
