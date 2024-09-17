import { BgColor } from './tokens/colors/bg'
import { TextColor } from './tokens/colors/text'

const styles = {
	global: () => ({
		'*': {
			boxSizing: 'border-box',
		},
		'html, body': {
			width: '100%',
			height: '100%',
			fontFamily: 'Inter, sans-serif',
			bg: BgColor.base,
			color: TextColor.base,
			margin: 0,
			padding: 0,
			fontSize: '14px',
		},
	}),
}

export default styles
