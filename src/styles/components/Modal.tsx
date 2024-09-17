import { modalAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { Border } from '../tokens/borders'
import { BgColor } from '../tokens/colors/bg'
import { BorderColor } from '../tokens/colors/border'
import { TextColor } from '../tokens/colors/text'
import { COLORS } from '../tokens/colors/constant'

const helpers = createMultiStyleConfigHelpers(modalAnatomy.keys)

export const Modal = helpers.defineMultiStyleConfig({
	baseStyle: {
		header: {
			color: TextColor.primary,
			borderBottom: Border.primary,
			p: 5,
			display: 'flex',
			align: 'center',
			borderColor: BorderColor.primary,
			fontSize: '16px',
		},
		closeButton: {
			top: 4,
			right: 5,
			color: COLORS.Red[400],
			borderColor: 'red',
			_focusVisible: {
				boxShadow: 'none',
			},
			_hover: {
				bgColor: COLORS.Brand[50],
				color: 'red',
			}
		},
		body: {
			py: 5,
			bg: BgColor.primary,
			color: TextColor.primary,
			fontSize: '14px',
		},
		footer: {
			gap: 4,
			borderTop: Border.primary,
		},

	},
})
