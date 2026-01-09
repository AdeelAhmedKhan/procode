import ResourceSection from '@/components/sections/ResourceSection';
import { resources } from '@/data/resource';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Sections/ResourceSection',
  component: ResourceSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data.*.icon'], // 🔒 lock icon only
    },
  },
  args: {
    data: resources,
  },
} satisfies Meta<typeof ResourceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
