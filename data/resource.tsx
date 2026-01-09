import { ResourceItem } from "@/lib/types/Resources";
import { Calculator, NotebookPen } from "lucide-react";
import { BiCommentDetail } from "react-icons/bi";

export const resources: ResourceItem[] = [
  {
    title: "Success Stories",
    description: "See how we've helped businesses just like yours automate workflows and achieve greater efficiency.",
    icon: <BiCommentDetail/>,
    link: "#"
  },
  {
    title: "Blog",
    description: "Read up on automation trends, AI breakthroughs, and how these technologies are transforming industries.",
    icon: <NotebookPen/>,
    link: "#"
  },
  {
    title: "RPA Savings Calculator",
    description: "Find out how much you could save with our RPA solutions. Use this quick tool to estimate potential cost reductions for your business.",
    icon: <Calculator/>,
    link: "#"
  }
];