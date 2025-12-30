import Hero from "@/components/Hero";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { title } from "process";
import { Children } from "react";

import { fn } from "storybook/test";

 const heroData={
  type:'home' as const,
title:'Automate Smarter',
subtitle:'Grow Faster',
description:'Unlock the full potential of your business with ProCode’s RPA and AI solutions.',
primaryCtaText:'Book a Free Discovery Call',
primaryCtaLink:'#',
secondaryCtaText:'See Case Studies',
secondaryCtaLink:'#',
bgImageUrl:'/bg-particle.png',
  alignment: 'center' as const,
}

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args:{
      ...heroData,
  }
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Home: Story = {
  args: {
    ...heroData,
  },
}
export const About: Story = {
  args: {
    type:'about',
    title:'About',
subtitle:'',
description:'At ProCode, we specialize in delivering cutting-edge RPA and AI solutions that drive efficiency and innovation. Our team of experts is dedicated to helping businesses automate complex processes, reduce operational costs, and unlock new growth opportunities through intelligent automation technologies.',
primaryCtaText:'Read More',
primaryCtaLink:'#',
secondaryCtaText:'',
secondaryCtaLink:'',
alignment: 'left' as const,
  },
}
export const Services: Story = {
  args: {
    type:'services',
    title:'Our Services',
subtitle:'Driving Business transformation through RPA & AI',
description:'',
primaryCtaText:'See Our Services',
primaryCtaLink:'#',
secondaryCtaText:'',
secondaryCtaLink:'',
alignment: 'left' as const,
  },
}
export const SuccessStories: Story = {
  args: {
    type:'success-stories',
    title:'Success Stories',
subtitle:'At ProCode, we don\'t just talked about results-we deliver them.',
description:'Driving Business transformation through RPA & AI',
primaryCtaText:'See Our Services',
primaryCtaLink:'#',
secondaryCtaText:'',
secondaryCtaLink:'',
alignment: 'left' as const,
  },
}