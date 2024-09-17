import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum IconColor {
	base = 'icon.base',
	primary = 'icon.primary',
	hover_primary = 'icon.hover_primary',
	active_primary = 'icon.active_primary',
}

export const iconColorSemanticTokens: Record<
	keyof typeof IconColor,
	SemanticTokenValue
> = {
	base: {
		default: COLORS.BlackGrey[700],
	},
	primary: {
		default: COLORS.BrandGrey[600],
	},
	hover_primary: {
		default: COLORS.BrandGrey[50],
	},
	active_primary: {
		default: COLORS.BrandGrey[900],
	},
}
