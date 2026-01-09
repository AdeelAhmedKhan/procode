import ContactCtaSection from '@/components/sections/ContactCtaSection';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Sections/ContactCTASection',
  component: ContactCtaSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title : 'Book a Free Consultation',
    description : 'Looking to discuss how automation can benefit your business? <br> <br> Schedule a free consultation with our experts to explore tailored solutions that meet your unique needs.',
    ctaText : 'Book Now',
    ctaLink : '#',
  },

} satisfies Meta<typeof ContactCtaSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    ...meta.args,
  }
};
