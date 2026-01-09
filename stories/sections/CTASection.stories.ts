import CTASection from '@/components/sections/CTASection';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Sections/CTASection',
  component: CTASection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Ready to Transform Your Business with RPA & AI?',
    description:
      'Contact ProCode today to discover how our cutting-edge RPA and AI solutions can streamline your operations, boost productivity, and drive innovation. Let us help you unlock new opportunities and stay ahead in the digital age.',
    ctaText: 'Get in Touch',
    ctaLink: '/contact',
  },
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
    ...meta.args,
  }
};
