import { SemanticTokenValue } from '@/styles/types'

import { COLORS } from './constant'

export enum DefaultColor {
	'black' = 'default.black',
	'white' = 'default.white',
	'brand' = 'default.brand',
	'danger' = 'default.danger',
}

export const defaultColorSemanticTokens: Record<
	keyof typeof DefaultColor,
	SemanticTokenValue
> = {
	black: {
		default: '#000',
	},
	white: {
		default: '#fff',
	},
	brand: {
		default: COLORS.Brand[500],
	},
	danger: {
		default: COLORS.Red[400],
	},
}
