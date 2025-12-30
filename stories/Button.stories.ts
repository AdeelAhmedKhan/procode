import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';


const meta = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control:  'select' ,
      description: 'The variant of the button',
      options: ['default', 'primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    size: {
      control:  'select' ,
      description: 'The size of the button',
      options: ['default', 'sm',  'lg', 'icon', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
   
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    children: 'Button',
    className: '',
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    disabled: false,
    children: 'Button',
    className: ''
  },
};

