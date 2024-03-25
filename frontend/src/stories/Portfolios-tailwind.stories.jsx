import React from "react";
import { Portfolio } from "../components/Portfolio";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: "Portfolio",
  component: Portfolio,
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
    label: "Portfolio",
  },
};

export const Phone = {
  args: {
    primary: true,
    label: "Portfolio",
  },
  parameters: { 
    viewport: { defaultViewport: 'iphone14promax', }
  },
};