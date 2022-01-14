import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'

import {
	Colors,
	StyledContainer,
	InnerContainer,
	PageLogo,
	PageTitle,
	SubTitle,
	StyledFormArea
} from '@components/styles'
import MyTextInput from '@components/MyTextInput'

const { darkLight } = Colors

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
						</StyledFormArea>
					)}
				</Formik>
			</InnerContainer>
		</StyledContainer>
	)
}

export default Login
