import { tailwindButton } from "./button-tailwind";

export default {
  title: "Button",
  component: tailwindButton,
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
