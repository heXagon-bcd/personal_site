import { Navbar } from "./TestNav";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: "TestNav",
  component: Navbar,
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
    label: "Navbar",
  },
};

export const PhoneView = {
  args: {
    primary: true,
    label: "Navbar",
  },
  parameters: { viewport: { defaultViewport: 'iphone14promax', }},
};
