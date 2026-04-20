import { Card } from 'pixel-retroui'
import { colors } from './colors'

type MudCardProps = React.ComponentProps<typeof Card>

export function MudCard({ bg = colors.surface, shadowColor = colors.shadow, ...props }: MudCardProps) {
  return <Card bg={bg} shadowColor={shadowColor} {...props} />
}
