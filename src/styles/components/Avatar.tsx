import { avatarAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { FONT_SIZE } from '../tokens/typography'

const helpers = createMultiStyleConfigHelpers(avatarAnatomy['keys'])

export const Avatar = helpers.defineMultiStyleConfig({
	sizes: {
		regular: {
			container: {
				width: '36px',
				height: '36px',
				fontSize: FONT_SIZE.regular,
			},
		},
	},
	variants: {
		square: {
			container: {
				borderRadius: 6,
			},
		},
	},
})
