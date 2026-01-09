import { ServicesTypes } from "@/lib/types/Services";

export type CaseStudy = {
  id: number;
  type:ServicesTypes;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  impact: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    type: "rpa",
    location: 'UAE',
    title: 'Manufacturing Company Saves 15% in Operational Costs with RPA',
    challenge:
      'The Operations/Planning team at this measurement instruments manufacturer faced productivity losses and potential disruptions in production timelines due to excessive manual data entry from Excel reports into their Oracle ERP system. This process was not only consumed significant resources but was also prone to errors that could delay production schedules and affect service delivery.',
    solution:
      'We developed and deployed a custom RPA solution to automate their manual workflows. The solution allowed the team to upload Excel reports directly, with the RPA tool handling order releases in Oracle automatically. Additionally, we automated other operations processes, including Purchase Order releases and Sales Order verification, to catch errors early.',
    results: [
      'Savings of 300+ employee hours monthly through process automation.',
      'Reduction of manual entry errors by 80%, significantly improving data accuracy.',
      'Enhanced operational KPIs, with a quantifiable 15% increase in overall efficiency.',
    ],
    impact:
      'The post-automation analysis revealed a decrease in process completion times by over 40%, enabling the team to reallocate resources to more critical tasks that drive production efficiency.',
    testimonial: {
      quote:
        'Implementing RPA has been a game-changer for our organization. The automation of repetitive tasks has significantly improved efficiency, reduced errors, and freed up valuable time for our team to focus on more strategic work.',
      author: 'Umar Dhanani',
      role: 'COO, Premier Petroleum, USA',
    },
  },
  {
    id: 2,
    type:"documentProcessing",
    location: 'Singapore',
    title: 'Logistics Firm Cuts Invoice Processing Time by 60%',
    challenge:
      'A leading logistics provider struggled with a massive backlog of vendor invoices. Their manual entry process was slow, leading to late payment penalties and strained vendor relationships.',
    solution:
      'We implemented an Intelligent Document Processing (IDP) solution combined with RPA to extract data from invoices automatically and cross-reference them with delivery notes before triggering payments in their accounting software.',
    results: [
      'Processed 5,000+ invoices monthly without human intervention.',
      'Eliminated 100% of late payment penalties.',
      'Achieved a 60% reduction in total cycle time for accounts payable.',
    ],
    impact:
      'The finance team transitioned from data entry to financial analysis, providing better insights into cash flow and allowing the company to negotiate better terms with suppliers.',
    testimonial: {
      quote:
        'The speed and accuracy of the automated system surpassed our expectations. It has completely transformed our back-office operations.',
      author: 'Sarah Tan',
      role: 'CFO, Global Logistics Ltd',
    },
  },
];
