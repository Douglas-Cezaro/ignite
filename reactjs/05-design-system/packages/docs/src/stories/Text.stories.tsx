import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@czr-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nobis iusto obcaecati quam cum possimus soluta, officia illo accusantium commodi optio eius libero doloremque quo impedit perspiciatis? Sequi, explicabo fuga!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
