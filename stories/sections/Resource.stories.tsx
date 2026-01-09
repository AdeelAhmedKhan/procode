import ResourceSection from '@/components/sections/ResourceSection';
import ResourceCard from '@/components/ResourceCard';
import { resources } from '@/data/resource';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/Sections/ResourceSection',
  component: ResourceSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['children', 'data.*.icon'],
    },
  },
  args: {
    tagline: 'Not Sure?',
    title: 'Explore Some of our Resources',
    description:
      "If you're looking to learn more or need some additional information before reaching out, take a moment to explore our resources:",
    alignment: 'left',
  },
} satisfies Meta<typeof ResourceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
render: (args) => {
  return (
      <ResourceSection {...args}>
      {resources.map((item,index) => (
        <ResourceCard key={index} {...item} Icon={item.icon} />
      ))}
    </ResourceSection>
  );
},

};
