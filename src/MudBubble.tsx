import { Bubble } from 'pixel-retroui'
import { colors } from './colors'

type MudBubbleProps = React.ComponentProps<typeof Bubble>

export function MudBubble({
  bg = colors.primary,
  textColor = colors.primaryText,
  ...props
}: MudBubbleProps) {
  return <Bubble bg={bg} textColor={textColor} {...props} />
}
