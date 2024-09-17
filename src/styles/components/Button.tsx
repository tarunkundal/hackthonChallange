import { defineStyleConfig } from '@chakra-ui/react'

import { BgColor } from '../tokens/colors/bg'
import { ButtonColor } from '../tokens/colors/button'
import { COLORS } from '../tokens/colors/constant'
import { DefaultColor } from '../tokens/colors/default'
import { IconColor } from '../tokens/colors/icon'
import { TextColor } from '../tokens/colors/text'
import { SHADOWS } from '../tokens/shadows'

export enum ButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	outline = 'outline',
	text = 'text',
	primary_icon = 'primary_icon',
}

export const Button = defineStyleConfig({
	baseStyle: {
		bg: 'transparent',
		_focus: {
			boxShadow: 'none',
		},
		cursor: 'pointer'
	},
	sizes: {
		sm: {
			h: '32px',
			px: '12px',
			fontSize: '14px',
		},
		md: {
			h: '36px',
			px: '12px',
			fontSize: '14px',
		},
	},
	variants: {
		[ButtonVariant.primary]: {
			bg: ButtonColor.primary,
			color: TextColor.button_primary,
			fontWeight: 600,
			borderRadius: '6px',
			border: 'none',
			_hover: {
				bg: ButtonColor.hover_primary,
				_disabled: {
					bg: ButtonColor.disabled_primary,
				},
			},
			_focusVisible: {
				boxShadow: SHADOWS.primary_button_focus,
			},
			_focus: {
				boxShadow: SHADOWS.primary_button_focus,
			},
			_disabled: {
				bg: ButtonColor.disabled_primary,
			},
		},
		[ButtonVariant.secondary]: {
			bg: BgColor.primary,
			color: TextColor.primary,
			fontWeight: 500,
			borderRadius: '6px',
			border: '1px solid',
			borderColor: COLORS.BlackGrey[500],
			boxShadow: SHADOWS.sm,
			_hover: {
				borderColor: COLORS.BlackGrey[600],
				_disabled: {
					borderColor: COLORS.BlackGrey[500],
				},
			},
			_disabled: {
				opacity: 0.5,
			},
		},

		[ButtonVariant.text]: {
			bg: 'transparent',
			color: DefaultColor.brand,
			fontWeight: 500,
			borderRadius: '6px',
			border: 'none',
			_hover: {
				color: COLORS.Brand[500],
				_disabled: {
					color: COLORS.Brand[500],
				},
			},
			_disabled: {
				opacity: 0.5,
			},
		},

		[ButtonVariant.primary_icon]: {
			bg: 'transparent',
			border: 'none',
			borderRadius: '6px',
			outline: 'none',
			h: '32px',
			minW: '32px',
			color: IconColor.primary,
			_hover: {
				bg: IconColor.hover_primary,
			},
		},

		[ButtonVariant.outline]: {
			bg: BgColor.primary,
			color: DefaultColor.brand,
			fontWeight: 500,
			borderRadius: '6px',
			border: '1px solid',
			borderColor: DefaultColor.brand,
			_hover: {
				bg: COLORS.Brand[50],
				_disabled: {
					bg: COLORS.BlackGrey[50],
				},
			},
			_focusVisible: {
				boxShadow: SHADOWS.primary_button_focus,
			},
			_disabled: {
				bg: COLORS.BlackGrey[50],
			},
		},
	},

	defaultProps: {
		size: 'md',
		variant: ButtonVariant.primary,

	},
})
