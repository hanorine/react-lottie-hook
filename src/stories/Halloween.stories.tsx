import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LottieHalloween from "./LottieHalloween";

const story = {
  title: "Lottie/Halloween",
  component: LottieHalloween,
  argTypes: {},
} as ComponentMeta<typeof LottieHalloween>;

export default story;

const Template: ComponentStory<typeof LottieHalloween> = (args) => <LottieHalloween {...args} />;

export const Default = Template.bind({});
Default.args = {};
