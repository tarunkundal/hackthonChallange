import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum ButtonColor {
	'primary' = 'button.primary',
	'hover_primary' = 'button.hover_primary',
	'disabled_primary' = 'button.disabled_primary',
}

export const buttonColorSemanticTokens: Record<
	keyof typeof ButtonColor,
	SemanticTokenValue
> = {
	primary: {
		default: COLORS.Brand[500],
	},
	hover_primary: {
		default: COLORS.Brand[200],
	},
	disabled_primary: {
		default: COLORS.Brand[700],
	},
}
