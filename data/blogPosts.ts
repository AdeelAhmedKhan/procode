import { Post } from "@/lib/types/Post";

export const blogPosts: Post[] = [
  {
    id: 1,
    title: "Scaling Efficiency with RPA",
    category: "Automation",
    excerpt: "Discover how Robotic Process Automation is transforming legacy workflows.",
    content: `
## What is RPA?
Robotic Process Automation (RPA) allows businesses to automate mundane tasks. 

### Key Benefits
* **Cost Reduction**: Lower operational costs by 30%.
* **Accuracy**: Bots don't make "typos."
* **Speed**: 24/7 execution without breaks.

> "The future of work isn't about humans doing the work of robots, but robots doing the work of robots so humans can be human."
    `,
    imageUrl: "blogs/images/post1.png",
    slug: "scaling-efficiency-rpa",
  },
  {
    id: 2,
    title: "The Future of Generative AI",
    category: "AI",
    excerpt: "Beyond chatbots: How LLMs are being integrated into core business logic.",
    content: `
## The Shift to Agentic AI
We are moving from simple chat interfaces to **AI Agents** that can execute code and make decisions.

1. **Reasoning**: Thinking through complex steps.
2. **Action**: Using tools (APIs, Databases).
3. **Memory**: Remembering past interactions.
    `,
    imageUrl: "blogs/images/post2.png",
    slug: "generative-ai-enterprise",
  },
  {
    id: 3,
    title: "IDP & RAG Architecture",
    category: "Data Science",
    excerpt: "Learn how RAG allows AI to 'read' your private documents safely.",
    content: `
## Understanding RAG
Retrieval-Augmented Generation (RAG) is the gold standard for enterprise AI. 

### The Workflow
It involves **Chunking**, **Embedding**, and **Vector Search**. This ensures that the AI answers questions based *only* on your uploaded PDFs, reducing hallucinations to near zero.
    `,
    imageUrl: "blogs/images/post1.png",
    slug: "idp-rag-explained",
  },
];