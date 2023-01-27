export interface Notification {
  id: string;
  message: string | (() => JSX.Element);
  type?: 'success' | 'normal' | 'warning' | 'error';
  timeout?: number;
}