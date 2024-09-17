import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum BgColor {
	'base' = 'bg.base',
	'primary' = 'bg.primary',
	'hover_primary' = 'bg.hover_primary',
	'active_primary' = 'bg.active_primary',
}

export const bgColorSemanticTokens: Record<
	keyof typeof BgColor,
	SemanticTokenValue
> = {
	base: {
		default: COLORS.BrandGrey[50],
	},
	primary: {
		default: COLORS.BlackGrey[50],
	},
	hover_primary: {
		default: COLORS.BrandGrey[50],
	},
	active_primary: {
		default: COLORS.BrandGrey[50],
	},
}
