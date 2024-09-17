import { extendTheme } from '@chakra-ui/react'

import { Avatar } from './components/Avatar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Menu } from './components/Menu'
import { Modal } from './components/Modal'
import { Text } from './components/Text'
import { borders } from './tokens/borders'
import { colors } from './tokens/colors'
import { COLORS } from './tokens/colors/constant'
import { FONT_SIZE, FONT_WEIGHT } from './tokens/typography'
import styles from './global'

const theme = {
	config: {
		initialColorMode: 'light',
	},
	semanticTokens: {
		colors: colors,
		borders: borders,
	},
	components: {
		Button: Button,
		Text: Text,
		Avatar: Avatar,
		Menu: Menu,
		Modal: Modal,
		Input: Input,
	},
	colors: COLORS,
	fontSizes: FONT_SIZE,
	fontWeights: FONT_WEIGHT,
	styles,
}

export const customTheme = extendTheme({ ...theme })
