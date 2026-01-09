import ContentImageSection, { ContentImageSectionProps } from '@/components/ContentImageSection';
import FeatureCard from '@/components/FeatureCard';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Award } from 'lucide-react';

const ContentImageSectionData: ContentImageSectionProps = {
  title: 'Our Vision',
  description:
    'Our vision is to become a trusted global leader in automation solutions, helping companies of all sizes unlock new opportunities by leveraging the power of RPA and AI. We strive to make digital transformation accessible and valuable for every business.',
  highlightText: '',
  imageSrc: 'about/our-vision.png',
  imageAlt: 'Our Vision',
  showCTA: false,
  ctaText: 'Read More',
  onCTAClick: () => alert('CTA Clicked'),

  reverse: false,
};

const meta = {
  title: 'Components/ContentImageSection',
  component: ContentImageSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    ...ContentImageSectionData,
  },
} satisfies Meta<typeof ContentImageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ContentImageSectionData,
  },
};
export const Mission: Story = {
  args: {
    title: "Our Mission",
    description: "At ProCode, our mission is simple: to help businesses achieve more with less. By leveraging the latest in RPA and AI technology, we enable our clients to automate repetitive processes, free up human resources for more strategic tasks, and save both time and money.<br><br> We believe that automation is not just about reducing manual work; it’s about enhancing business agility and ensuring that companies can thrive in today’s fast-evolving digital landscape.",
    imageSrc: "about/our-mission.png",
    imageAlt: "Our Vision",
    reverse: true,
  },
};
