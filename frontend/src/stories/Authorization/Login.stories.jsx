import React from "react";
import { Login } from './login'
import { Register } from "./register"

export default {
  title: 'Main/Auth',
  component: Login,
  subcomponents: { Register },
  parameters: {
    layout: 'fullscreen',
  },
};

const LoginPage = (args) => <Login {...args} />;
export const SignIn = LoginPage.bind({});

const RegisterPage = (args) => <Register {...args} />
export const SignUp = RegisterPage.bind({});