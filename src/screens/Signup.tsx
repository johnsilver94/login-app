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

const SignUp = () => {
	const [hidePassword, setHidePassword] = useState<boolean>(true)

	return (
		<StyledContainer>
			<StatusBar style="dark" />
			<InnerContainer>
				<PageLogo resizeMode="cover" source={require('../../assets/logo.jpg')} />
				<PageTitle>Login page</PageTitle>
				<SubTitle>Account Login</SubTitle>
				<Formik
					initialValues={{ fullName: '', dateOfBirth: '', email: '', password: '', confirmPassword: '' }}
					onSubmit={(values) => {
						console.log(values)
					}}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<StyledFormArea>
							<MyTextInput
								label="Full Name"
								icon="person"
								placeholder="John Doe"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('fullName')}
								onBlur={handleBlur('fullName')}
								value={values.fullName}
							/>
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
								label="Date of Birth"
								icon="calendar"
								placeholder="YYYY - MM - DD"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('dateOfBirth')}
								onBlur={handleBlur('dateOfBirth')}
								value={values.dateOfBirth}
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
							<MyTextInput
								label="Confirm password"
								icon="lock"
								placeholder="mypass123"
								placeholderTextColor={darkLight}
								onChangeText={handleChange('confirmPassword')}
								onBlur={handleBlur('confirmPassword')}
								value={values.confirmPassword}
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
							<ExtraView>
								<ExtraText>Already have an account?</ExtraText>
								<TextLink>
									<TextLinkContent> Sign in</TextLinkContent>
								</TextLink>
							</ExtraView>
						</StyledFormArea>
					)}
				</Formik>
			</InnerContainer>
		</StyledContainer>
	)
}

export default SignUp
