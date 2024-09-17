import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { Border } from '../tokens/borders'
import { BgColor } from '../tokens/colors/bg'
import { DefaultColor } from '../tokens/colors/default'
import { IconColor } from '../tokens/colors/icon'
import { TextColor } from '../tokens/colors/text'

export enum MenuVariant {
	vertical_dots = 'vertical_dots',
}

const helpers = createMultiStyleConfigHelpers(menuAnatomy.keys)

export const Menu = helpers.defineMultiStyleConfig({
	baseStyle: {
		button: {
			p: '4px',
			w: '36px',
			h: '36px',
			maxH: '36px',
			borderRadius: '8px',
			_hover: {
				bg: BgColor.hover_primary,
			},
		},
		list: {
			px: '4px',
			py: '8px',
			borderRadius: '10px',
			border: Border.primary,
			bg: DefaultColor.white,
			boxShadow: 'sm',
		},
		icon: {
			fontSize: '16px',
			color: TextColor.primary,
			fontWeight: 500,
		},
		item: {
			color: TextColor.primary,
			borderRadius: '6px',
			fontSize: '14px',
			fontWeight: 500,
			_hover: {
				bg: BgColor.hover_primary,
			},
			_focus: {
				bg: BgColor.hover_primary,
			},
		},
	},

	variants: {
		[MenuVariant.vertical_dots]: {
			button: {
				border: 'none',
				borderRadius: '6px',
				outline: 'none',
				color: IconColor.primary,
				_hover: {
					bg: IconColor.hover_primary,
				},
			},
		},
	},
})
