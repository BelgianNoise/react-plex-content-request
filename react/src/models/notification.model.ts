export interface Notification {
  id: string;
  message: string;
  type?: 'success' | 'normal' | 'warning' | 'error';
  timeout?: number;
}