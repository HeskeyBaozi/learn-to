export interface ITodo {
  title: string;
  done: boolean;
}

export interface State {
  role: 'guest' | 'user' | 'admin';
}
