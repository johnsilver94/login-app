import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import { Fontisto } from '@expo/vector-icons'

import {
	Colors,
	StyledContainer,
	InnerContainer,
	PageLogo,
	PageTitle,
	SubTitle,
	StyledFormArea,
	StyledButton,
	ButtonText,
	MsgBox,
	Line,
	ExtraView,
	ExtraText,
	TextLink,
	TextLinkContent
} from '@components/styles'
import MyTextInput from '@components/MyTextInput'

const { darkLight, primary } = Colors

const Login = () => {
	const [hidePassword, setHidePassword] = useState<boolean>(true)

	return (
		<StyledContainer>
			<StatusBar style="dark" />
			<InnerContainer>
				<PageLogo resizeMode="cover" source={require('../../assets/logo.jpg')} />
				<PageTitle>Login page</PageTitle>
				<SubTitle>Account Login</SubTitle>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(values) => {
						console.log(values)
					}}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<StyledFormArea>
							<MyTextInput
								label="Email Address"
								icon="mail"
								placeholder="example@mail.com"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
								keyboardType="email-address"
							/>
							<MyTextInput
								label="Password"
								icon="lock"
								placeholder="mypass123"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								secureTextEntry={hidePassword}
								isPassword={true}
								hidePassword={hidePassword}
								setHidePassword={setHidePassword}
							/>
							<MsgBox>...</MsgBox>
							<StyledButton onPress={() => handleSubmit}>
								<ButtonText>Login</ButtonText>
							</StyledButton>
							<Line />
							<StyledButton google={true} onPress={() => handleSubmit}>
								<Fontisto name="google" color={primary} size={25} />
								<ButtonText>Sign in with Google</ButtonText>
							</StyledButton>
							<ExtraView>
								<ExtraText>Don&apos;t have an account already?</ExtraText>
								<TextLink>
									<TextLinkContent> Sign up</TextLinkContent>
								</TextLink>
							</ExtraView>
						</StyledFormArea>
					)}
				</Formik>
			</InnerContainer>
		</StyledContainer>
	)
}

export default Login
