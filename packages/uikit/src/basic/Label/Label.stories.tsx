import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'basic/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: unknown) => <Label {...args} />;

export const Primary = Template.bind({});

