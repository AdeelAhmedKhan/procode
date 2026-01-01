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
      <style jsx>{`
        .markdown.prose :global(h1),
        .markdown.prose :global(h2),
        .markdown.prose :global(h3),
        .markdown.prose :global(h4) {
          margin: 0px 0px 3px 0px;
          font-size: 0.8rem;
        }

        .markdown.prose :global(p),
        .markdown.prose :global(ul),
        .markdown.prose :global(ol),
        .markdown.prose :global(li),
        .markdown.prose :global(li) :global(p) {
          margin: 2px 0px;
          font-size: 0.75rem;
        }
      `}</style>
      <div
        className={cn(`prose markdown`, className)}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
}
