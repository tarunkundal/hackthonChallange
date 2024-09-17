import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

import { COLORS } from '../tokens/colors/constant'
import { TextColor } from '../tokens/colors/text'
import { FONT_SIZE } from '../tokens/typography'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys)

// Define the "pill" variant
const pill = definePartsStyle(() => {
	return {
		field: {
			border: '1px solid',
			borderColor: COLORS.Brand[50],
			background: COLORS.BrandGrey[20],
			borderRadius: 'md',
			transition: 'all 0.2s',
			position: 'relative',
			appearance: 'none',
			paddingX: 2,
			fontSize: '14px',

			// Change border color on focus
			_focus: {
				borderColor: COLORS.Brand[200],
				boxShadow: `0 0 0 1px ${COLORS.Brand[500]}`,
			},

			// Change background color on hover
			_hover: {
				background: COLORS.BrandGrey[50],
				borderColor: COLORS.Brand[200],

			},
			_disabled: {
				opacity: 0.4,
				cursor: 'not-allowed',
			},

			// Dark mode alternatives
			_dark: {
				borderColor: 'gray.600',
				background: 'gray.800',
				padding: '12px',
			},
		},
		addon: {
			border: '1px solid',
			borderColor: COLORS.Brand[50],
			background: COLORS.BrandGrey[50],
			borderRadius: 'md',
			paddingX: 2,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'gray.500',

			_groupFocusWithin: {
				borderColor: COLORS.Brand[500],
				boxShadow: `0 0 0 1px ${COLORS.Brand[500]}`,
			},
			_disabled: {
				opacity: 0.4,
				cursor: 'not-allowed',
			},

			_dark: {
				borderColor: 'gray.600',
				background: 'gray.600',
				color: 'gray.400',
				padding: '12px',
			},
		},
		element: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			pointerEvents: 'none',
			px: 2,
			_disabled: {
				opacity: 0.4,
				cursor: 'not-allowed',
			},
		},
	}
})

// Define the "xl" size
const xl = defineStyle({
	fontSize: FONT_SIZE.xl,
})

// Combine the size with other parts (field, addon)
const sizes = {
	xl: definePartsStyle({ field: xl, addon: xl, element: xl }),
}

const field = defineStyle({
	color: TextColor.label_primary,
})

// Export the customized Input theme configuration
export const Input = defineMultiStyleConfig({
	variants: { pill },
	sizes: sizes,
	baseStyle: {
		field: field,
	},
	// Register the custom sizes
	defaultProps: {
		variant: 'pill',
	},
})
