import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Label from "."

export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args: unknown) => <Label {...args}>Sono una Label</Label>

export const Primary = Template.bind({})
