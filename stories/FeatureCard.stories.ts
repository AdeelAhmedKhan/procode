import FeatureCard from "@/components/FeatureCard";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Award } from "lucide-react"



 const featureCardData={
   title:"Proven Expertise",
            description:"With years of experience in RPA and AI, we ensure your business stays ahead of the curve.",
            Icon: Award 
}

const meta = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args:{
      ...featureCardData,
  }
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...featureCardData,
  },
}

