import type { ComponentStyleConfig } from '@chakra-ui/react'

import { TextColor } from '../tokens/colors/text'
import { FONT_SIZE, FONT_WEIGHT } from '../tokens/typography'

export enum TextVariant {
	regular12 = 'regular12',
	medium12 = 'medium12',
	semibold12 = 'semibold12',
	bold12 = 'bold12',

	regular14 = 'regular14',
	medium14 = 'medium14',
	semibold14 = 'semibold14',
	bold14 = 'bold14',

	regular16 = 'regular16',
	medium16 = 'medium16',
	semibold16 = 'semibold16',
	bold16 = 'bold16',

	regular18 = 'regular18',
	medium18 = 'medium18',
	semibold18 = 'semibold18',
	bold18 = 'bold18',

	regular20 = 'regular20',
	medium20 = 'medium20',
	semibold20 = 'semibold20',
	bold20 = 'bold20',

	regular24 = 'regular24',
	medium24 = 'medium24',
	semibold24 = 'semibold24',
	bold24 = 'bold24',
}

export const Text: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: FONT_WEIGHT.regular,
		fontSize: FONT_SIZE.regular,
	},
	variants: {
		/** Font Size 12 varaints */
		[TextVariant.regular12]: {
			color: TextColor.label_primary,
			fontSize: FONT_SIZE.sm,
			fontWeight: FONT_WEIGHT.regular,
		},
		[TextVariant.medium12]: {
			color: TextColor.label_primary,
			fontSize: FONT_SIZE.sm,
			fontWeight: FONT_WEIGHT.medium,
		},
		[TextVariant.semibold12]: {
			color: TextColor.label_primary,
			fontSize: FONT_SIZE.sm,
			fontWeight: FONT_WEIGHT.semibold,
		},
		[TextVariant.bold12]: {
			color: TextColor.label_primary,
			fontSize: FONT_SIZE.sm,
			fontWeight: FONT_WEIGHT.bold,
		},

		/** Font Size 14 varaints */
		[TextVariant.regular14]: {
			fontSize: FONT_SIZE.regular,
			fontWeight: FONT_WEIGHT.regular,
		},
		[TextVariant.medium14]: {
			fontSize: FONT_SIZE.regular,
			fontWeight: FONT_WEIGHT.medium,
		},
		[TextVariant.semibold14]: {
			fontSize: FONT_SIZE.regular,
			fontWeight: FONT_WEIGHT.semibold,
		},
		[TextVariant.bold14]: {
			fontSize: FONT_SIZE.regular,
			fontWeight: FONT_WEIGHT.bold,
		},

		/** Font Size 16 varaints */
		[TextVariant.regular16]: {
			fontSize: FONT_SIZE.md,
			fontWeight: FONT_WEIGHT.regular,
		},
		[TextVariant.medium16]: {
			fontSize: FONT_SIZE.md,
			fontWeight: FONT_WEIGHT.medium,
		},
		[TextVariant.semibold16]: {
			fontSize: FONT_SIZE.md,
			fontWeight: FONT_WEIGHT.semibold,
		},
		[TextVariant.bold16]: {
			fontSize: FONT_SIZE.md,
			fontWeight: FONT_WEIGHT.bold,
		},

		/** Font Size 18 varaints */
		[TextVariant.regular18]: {
			fontSize: FONT_SIZE.lg,
			fontWeight: FONT_WEIGHT.regular,
		},
		[TextVariant.medium18]: {
			fontSize: FONT_SIZE.lg,
			fontWeight: FONT_WEIGHT.medium,
		},
		[TextVariant.semibold18]: {
			fontSize: FONT_SIZE.lg,
			fontWeight: FONT_WEIGHT.semibold,
		},
		[TextVariant.bold18]: {
			fontSize: FONT_SIZE.lg,
			fontWeight: FONT_WEIGHT.bold,
		},

		/** Font Size 20 varaints */
		[TextVariant.regular20]: {
			fontSize: FONT_SIZE.xl,
			fontWeight: FONT_WEIGHT.regular,
		},
		[TextVariant.medium20]: {
			fontSize: FONT_SIZE.xl,
			fontWeight: FONT_WEIGHT.medium,
		},
		[TextVariant.semibold20]: {
			fontSize: FONT_SIZE.xl,
			fontWeight: FONT_WEIGHT.semibold,
		},
		[TextVariant.bold20]: {
			fontSize: FONT_SIZE.xl,
			fontWeight: FONT_WEIGHT.bold,
		},

		/** Font Size 24 varaints */
		[TextVariant.regular24]: {
			fontSize: FONT_SIZE['2xl'],
			fontWeight: FONT_WEIGHT.regular,
		},
		[TextVariant.medium24]: {
			fontSize: FONT_SIZE['2xl'],
			fontWeight: FONT_WEIGHT.medium,
		},
		[TextVariant.semibold24]: {
			fontSize: FONT_SIZE['2xl'],
			fontWeight: FONT_WEIGHT.semibold,
		},
		[TextVariant.bold24]: {
			fontSize: FONT_SIZE['2xl'],
			fontWeight: FONT_WEIGHT.bold,
		},
	},
}
