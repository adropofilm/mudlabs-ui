import type React from 'react'
import { Button } from 'pixel-retroui'
import { colors } from './colors'

type Variant = 'primary' | 'secondary' | 'danger'

type MudButtonProps = React.ComponentProps<typeof Button> & {
  variant?: Variant
}

const variantStyles: Record<Variant, { bg: string; textColor: string; shadow: string }> = {
  primary: {
    bg: colors.primary,
    textColor: colors.primaryText,
    shadow: colors.shadow,
  },
  secondary: {
    bg: colors.surface,
    textColor: colors.surfaceText,
    shadow: colors.shadow,
  },
  danger: {
    bg: colors.danger,
    textColor: colors.dangerText,
    shadow: colors.shadow,
  },
}

export function MudButton({ variant = 'primary', ...props }: MudButtonProps) {
  const styles = variantStyles[variant]
  return <Button bg={styles.bg} textColor={styles.textColor} shadow={styles.shadow} {...props} />
}
