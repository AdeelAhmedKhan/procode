import WhyChooseUs from '@/components/sections/WhyChooseUs';
import { services } from '@/data/services';
import { whyChooseUsCards } from '@/data/whyChooseUs';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Sections/WhyChooseUs',
  component: WhyChooseUs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data.*.icon'],
    },
  },
  args: {
    description:
      'At ProCode, we are dedicated to delivering exceptional RPA and AI solutions that drive real business value. Here’s why you should choose us as your trusted automation partner:',
    data: whyChooseUsCards,
    showCta: true,
  },
} satisfies Meta<typeof WhyChooseUs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
