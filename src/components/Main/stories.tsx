import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  // Optional because Main already have default values
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
