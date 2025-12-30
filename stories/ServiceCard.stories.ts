import ServiceCard from "@/components/ServiceCard";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bot, Cpu, FileText } from "lucide-react"


 const serviceCardData={
  item:{ title: 'Robotic Process Automation (RPA)',
    description: 'Streamline repetitive tasks and boost efficiency with our RPA solutions.',
    icon: Bot,
    accent:'bg-yellow-100 text-yellow-600'  }
}

const meta = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args:{
      ...serviceCardData,
  }
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;



export const RPA: Story = {
  args: {
    ...serviceCardData,
  },
}
export const AI: Story = {
  args: {
    item:{ title: 'Artificial Intelligence (AI)',
    description: 'Enhance decision-making and customer interactions with our AI integration services.',
    icon: Cpu,
    accent: 'bg-green-100 text-green-600' }
  },
}
export const DocumentProcessing: Story = {
  args: {
    item:{ title: 'Document Processing & RAG',
    description: 'Automate document handling and extraction with our advanced AI-powered solutions.',
    icon: FileText,
    accent: 'bg-purple-100 text-purple-600' }

  },
}