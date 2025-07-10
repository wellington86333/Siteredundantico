// Strategy Pattern Interface
export interface INotificationStrategy {
  send(message: string, type: NotificationType): void;
}

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}