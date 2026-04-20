import { Input } from 'pixel-retroui'
import { colors } from './colors'

type MudInputProps = React.ComponentProps<typeof Input>

export function MudInput({
  bg = colors.surface,
  borderColor = colors.sand,
  textColor = colors.surfaceText,
  ...props
}: MudInputProps) {
  return <Input bg={bg} borderColor={borderColor} textColor={textColor} {...props} />
}
