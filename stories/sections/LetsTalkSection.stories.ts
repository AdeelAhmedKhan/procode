import CTASection from '@/components/sections/CTASection';
import LetsTalkSection from '@/components/sections/LetsTalkSection';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Sections/LetsTalkSection',
  component: LetsTalkSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    headerNote : 'Together, we’ve delivered solutions across industries, helping our clients achieve measurable results while navigating their unique challenges.',
    title : 'Let’s Talk',
    description : 'Ready to explore how ProCode can help your business automate processes and achieve more with less? Book a Consultation or Contact Us to learn more about how our tailored RPA and AI solutions can drive transformation in your organization.',
    ctaText : 'See Case Studies',
    ctaLink : '/contact',
  },
} satisfies Meta<typeof LetsTalkSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
    ...meta.args,
  }
};
