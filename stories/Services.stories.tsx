import Services from '@/components/Services';
import { aiData, documentProcessingData, robotAutomationData } from '@/data/services';
import { ServiceSectionProps } from '@/lib/types/Services';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Atom, Award, Bot, ScanQrCode } from 'lucide-react';

const ServiceSectionData: ServiceSectionProps = {
  type: 'multiList',
  badgeIcon: <Bot />,
  title: 'Robotic Process Automation (RPA)',
  description:
    'Our RPA solutions automate repetitive tasks, increase operational efficiency, and reduce human errors, allowing your team to focus on high-value activities. We work across industries including manufacturing, supply chain, healthcare, retail, and more.',
  tagLine: 'How RPA benefit your business?',
  services: robotAutomationData,
  footNote:
    'RPA is ideal for automating structured and rule-based tasks that can be replicated in digital systems, making your operations more efficient and cost-effective.',
  bulletColor: 'bg-linear-to-b from-[#FFE28D] to-[#FFF2C9]',
  bgColor: 'bg-linear-to-b from-[#FFE28D] to-[#FFF2C9]',
};

const meta = {
  title: 'Components/Services',
  component: Services,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...ServiceSectionData,
  },
  argTypes: {
    badgeIcon: {
      control: false, // ✅ disables editing
      table: {
        disable: true, // ✅ hides from Docs table
      },
    },
  },
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RPAServices: Story = {
  args: {
    ...ServiceSectionData,
  },
};
export const AIServices: Story = {
  args: {
    type: 'singleList',
    badgeIcon: <Atom />,
    title: 'AI Integration',
    description:
      'Artificial Intelligence is transforming business landscapes, and our AI solutions are built to give you a competitive edge. Whether it’s optimizing workflows or enhancing decision-making, our AI services help you get more out of your existing processes.',
    tagLine: 'Key AI Solutions We Offer',
    services: aiData,
    footNote:
      "The AI landscape is evolving rapidly, and the services we offer evolve with it. If you have other AI-related tasks or projects, don’t hesitate to reach out to us, and we'll explore how we can assist you.",
    bulletColor: 'bg-linear-to-b from-[#C9FBC0] to-[#71F9F0]',
    bgColor: 'bg-linear-to-b from-[#C9FBC0] to-[#71F9F0]',
  },
};

export const DocumentProcessingServices: Story = {
  args: {
    type: 'iconList',
    badgeIcon: <ScanQrCode />,
    title: 'Document Processing & RAG',
    description:
      'Our consulting services help you identify the right RPA and AI solutions tailored to your business challenges. We guide you through the automation process, from initial assessment to successful implementation, ensuring that your investment delivers maximum value.',
    tagLine: 'Why Choose ProCode?',
    services: documentProcessingData,
    bulletColor: 'bg-linear-to-b from-[#DBC7FF] to-[#EEE5FF]',
    bgColor: 'bg-linear-to-b from-[#DBC7FF] to-[#EEE5FF]',
  },
};
