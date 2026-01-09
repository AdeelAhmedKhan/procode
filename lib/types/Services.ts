import { ReactNode } from "react";

export type ServicesTypes= "rpa" | "ai" | "documentProcessing" | "customSoftware";
// brief services type
export type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
};
// detail services types
export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceMultiList = {
  style: 'multiList';
  content: ServiceItem[];
  image: string;
  imageAlt?: string;
};

export type ServiceSingleList = {
  style: 'singleList';
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export type ServiceIconList = {
  style: 'iconList';
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export type Services = ServiceMultiList | ServiceSingleList | ServiceIconList;

export type ServiceSectionProps = {
  type: 'multiList' | 'singleList' | 'iconList';
  badgeIcon?: ReactNode;
  title: string;
  description?: string;
  tagLine?: string;
  services: Services[];
  footNote?: string;

  /** Styling controls */
  bulletColor?: string;
  bgColor?: string;
};