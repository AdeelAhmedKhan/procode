import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

interface Props {
  item:
{ title: string
    description: string
    icon: any
    accent: string}
}
function ServiceCard(
  {item}: Props
) {
  return (
     <Card
              key={item.title}
              className="border border-border shadow-sm hover:shadow-md transition"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${item.accent}`}
                >
                  <item.icon className="h-7 w-7" />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-6 rounded-full"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
  )
}

export default ServiceCard