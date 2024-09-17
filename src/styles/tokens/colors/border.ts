import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum BorderColor {
	'primary' = 'border.primary',
	'active' = 'border.active',
}

export const borderColorSemanticTokens: Record<
	keyof typeof BorderColor,
	SemanticTokenValue
> = {
	primary: {
		default: COLORS.BlackGrey[500],
	},
	active: {
		default: COLORS.BlackGrey[900],
	},
}
