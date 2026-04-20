import { Popup } from 'pixel-retroui'
import { colors } from './colors'

type MudPopupProps = React.ComponentProps<typeof Popup>

export function MudPopup({ bg = colors.surface, ...props }: MudPopupProps) {
  return <Popup bg={bg} {...props} />
}
