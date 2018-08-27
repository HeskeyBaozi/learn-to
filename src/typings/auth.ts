export interface LoginFormFields {
  username: string;
  password: string;
  captcha: string;
  rememberMe: boolean;
}

export interface RegisterFormFields {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
