import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tag, { BASE_THEMES } from '../components/tag'

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    theme: {
      options: BASE_THEMES,
      control: 'select'
    },
    inverted: {
      control: 'boolean'
    },
    hasBorder: {
      control: 'boolean'
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const ExampleTag = Template.bind({});
ExampleTag.args = {
  theme: BASE_THEMES[0],
  text: 'Tag Label',
  hasBorder: false,
  inverted: false,
};
