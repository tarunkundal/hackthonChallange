import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'
import { DefaultColor } from './default'

export enum TextColor {
	base = 'text.base',
	primary = 'text.primary',
	label_primary = 'text.label_primary',
	primary_on_brand_background = 'text.primary_on_brand_background',
	button_primary = 'text.button_primary',
	in_active_primary = 'text.in_active_primary',
}

export const textColorSemanticTokens: Record<
	keyof typeof TextColor,
	SemanticTokenValue
> = {
	base: {
		default: DefaultColor.black,
	},
	primary: {
		default: COLORS.BrandGrey[1100],
	},
	primary_on_brand_background: {
		default: DefaultColor.white,
	},
	button_primary: {
		default: DefaultColor.white,
	},
	label_primary: {
		default: COLORS.BrandGrey[600],
	},
	in_active_primary: {
		default: COLORS.BrandGrey[500],
	},
}
