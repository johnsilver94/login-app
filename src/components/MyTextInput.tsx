import React, { FC } from 'react'
import { View, TextInputProps } from 'react-native'
import { Octicons, Ionicons } from '@expo/vector-icons'

import { Colors, LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } from '@components/styles'

const { brand, darkLight } = Colors

type MyTextInputProps = {
	label: string
	icon: any
	isPassword?: boolean
	hidePassword?: any
	setHidePassword?: any
} & TextInputProps

const MyTextInput: FC<MyTextInputProps> = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name={icon} size={30} color={brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledTextInput {...props} />
			{isPassword && (
				<RightIcon onPress={() => setHidePassword(!hidePassword)}>
					<Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
				</RightIcon>
			)}
		</View>
	)
}

export default MyTextInput
