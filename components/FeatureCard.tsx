import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Award } from 'lucide-react'

interface Props {
 title: string
    description: string
  Icon: React.ElementType
    
}

function FeatureCard(
  {title,description,Icon}: Props
) {
  return (
      <Card className="border border-border shadow-sm hover:shadow-md transition max-w-md">
            <CardContent className="flex items-start gap-4 p-8 text-left">
             
              <div>
                <h3 className="text-lg font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                {description}
                </p>
              </div>
               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                <Icon className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
  )
}

export default FeatureCard