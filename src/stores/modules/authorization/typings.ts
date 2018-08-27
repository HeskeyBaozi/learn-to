export interface State {
  role: 'guest' | 'user' | 'admin';
}

export interface LoginSuccessData {
  username: string;
  role: Pick<State, 'role'>;
}
