'use client'

interface WelcomeProps {
  title: string
  description: string
}

export function WelcomeComponent(props: WelcomeProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-2xl font-semibold tracking-tight">{props.title}</h3>

      <p className="text-muted-foreground text-sm">{props.description}</p>
    </div>
  )
}
