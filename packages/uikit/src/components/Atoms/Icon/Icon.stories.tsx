import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Icon from "."

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({
  name: "Comments",
})
