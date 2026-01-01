import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Award } from 'lucide-react'
import Markdown from './ui/markdown'

interface Props {
 title: string
    description: string
  Icon: React.ElementType
    
}

function FeatureCard(
  {title,description,Icon}: Props
) {
  return (
    <Card className="border-border max-w-md border shadow-sm transition hover:shadow-md">
      <CardContent className="flex items-start gap-4 p-8 text-left">
        <div>
          <h3 className="text-2xl text-primary">{title}</h3>
          <p className="text-primary mt-3 text-sm">
            <Markdown md={description} />
          </p>
        </div>
        <div className="text-primary flex size-15 items-center justify-center rounded-lg bg-indigo-50 p-4">
          <Icon className="h-6 w-6" />
        </div>
      </CardContent>
    </Card>
  );
}

export default FeatureCard