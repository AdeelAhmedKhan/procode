'use client';

import { cn } from '@/lib/utils';
import { marked } from 'marked';

interface Props {
  className?: string;
  children?: string;
  md?: string;
}

export default function Markdown({ md, children, className }: Props) {
  const markdown = md ? md : children ? children : '';
  const htmlContent = marked(markdown);
  return (
    <>
      <div
        className={cn(`prose markdown`, className)}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
