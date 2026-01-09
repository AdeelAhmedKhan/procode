import { Service, ServiceIconList, ServiceMultiList, ServiceSingleList } from '@/lib/types/Services';
import { Bot, Cpu, FileText } from 'lucide-react';

export const services: Service[] = [
  {
    title: 'RPA Solutions',
    description: 'Automate repetitive tasks to save time and reduce errors.',
    icon: Bot,
    accent: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'AI Integration',
    description:
      'Leverage advanced AI for smarter decision-making, predictive analytics, and enhanced customer interactions.',
    icon: Cpu,
    accent: 'bg-green-100 text-green-600',
  },
  {
    title: 'Document Processing & RAG',
    description:
      'Automate document handling and retrieval with AI, boosting efficiency and accuracy.',
    icon: FileText,
    accent: 'bg-purple-100 text-purple-600',
  },
];
export const robotAutomationData: ServiceMultiList[] = [
  {
    style: 'multiList',
    content: [
      {
        title: 'Automation of Manual Workflows',
        description:
          "From data entry to invoice processing, RPA can handle routine tasks with speed and accuracy, freeing up your team's time for more strategic work.",
      },
      {
        title: 'Scalable & Cost-Effective:',
        description:
          'As your business grows, our RPA solutions scale effortlessly, helping you reduce labor costs without compromising quality.',
      },
      {
        title: 'Document Processing:',
        description:
          'RPA is excellent for automating document handling tasks such as data extraction, document classification, and automated workflows. This ensures faster, more accurate processing, and significantly reduces manual errors.',
      },
      {
        title: 'Business Process/Application Automation:',
        description:
          "Whether it's order management, invoicing, or customer support, RPA can automate any process or application currently being handled manually, saving time and reducing operational costs.",
      },
    ],
    image: 'services/rpa/rpa-robot.png',
    imageAlt: 'RPA Automation Benefits',
  },
  {
    style: 'multiList',
    content: [
      {
        title: 'Web Scraping & Automation:',
        description:
          'Extract data from websites and automate web-based processes to improve efficiency and reduce manual effort.',
      },
      {
        title: 'Maximize Legacy Systems:',
        description:
          'Avoid costly upgrades to legacy systems by automating workflows that interact with older technology. RPA can help you get more value from your existing infrastructure, reducing the need for expensive system overhauls.',
      },
      {
        title: 'Data Entry & Migration:',
        description:
          'Automate the transfer and validation of data between systems, eliminating human error and speeding up migration tasks.',
      },
      {
        title: 'Increase Employee Productivity:',
        description:
          'By automating time-consuming tasks, RPA enables employees to focus on higher-value activities, improving overall productivity and job satisfaction.',
      },
    ],
    image: 'services/rpa/rpa-benefit.png',
    imageAlt: 'RPA Scalability Benefits',
  },
];
export const aiData: ServiceSingleList[] = [
  {
    style: 'singleList',
    title: 'Chatbots & Virtual Assistants',
    description:
      'Automate customer interactions and provide round-the-clock service through AI-powered chatbots or voice assistants, capable of handling language-based queries in real time.',
    image: 'services/ai/1.png',
  },
  {
    style: 'singleList',
    title: 'RAG (Retrieval-Augmented Generation)',
    description:
      'Enhance your document retrieval systems with our RAG solutions. AI models fetch relevant data from large datasets and generate responses or summaries based on external sources. This is ideal for industries like legal, healthcare, and finance where quick access to accurate data is critical.',
    image: 'services/ai/2.png',
  },
  {
    style: 'singleList',
    title: 'Document Processing with AI',
    description:
      "AI can complement RPA by enhancing document handling tasks. While RPA automates structured document processes, AI can interpret and extract unstructured data from scanned PDFs, invoices, contracts, and other complex formats. This allows you to automate more sophisticated document processing tasks that RPA alone can't handle efficiently.",
    image: 'services/ai/3.png',
  },
];

export const documentProcessingData: ServiceIconList[] = [
  {
    style: 'iconList',
    title: 'Tailored Solutions for Your Industry',
    description:
      'We design personalized RPA and AI strategies that align with your unique needs, driving maximum impact and efficiency across all areas of your operations.',
    image: 'services/dp/1.png',
  },
  {
    style: 'iconList',
    title: 'Innovative AI Capabilities',
    description:
      'From document processing to intelligent retrieval systems, our AI solutions help your business leverage data like never before.',
    image: 'services/dp/2.png',
  },
  {
    style: 'iconList',
    title: 'Proven Results',
    description:
      'Our clients have seen significant cost savings and operational efficiencies with our RPA and AI solutions.',
    image: 'services/dp/3.png',
  },
];
