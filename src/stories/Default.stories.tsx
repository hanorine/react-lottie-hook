import React from "react";
import { ComponentStory } from "@storybook/react";

import DefaultLottie, { defaultRendererSettings } from "./DefaultLottie";
import { Renderer } from "..";

const story = {
  title: "Lottie/Default",
  component: DefaultLottie,
  argTypes: {
    height: 200,
    width: 200,
    renderer: Renderer.svg,
    rendererSettings: defaultRendererSettings,
  },
};

export default story;

const Template: ComponentStory<typeof DefaultLottie> = (args) => <DefaultLottie {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: 200,
  width: 200,
  renderer: Renderer.svg,
  rendererSettings: defaultRendererSettings,
};
