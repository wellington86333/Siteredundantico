import { INotificationStrategy, NotificationType } from '../interfaces/INotification';

// Strategy Pattern Implementation
// DOM Notification Strategy
export class DOMNotificationStrategy implements INotificationStrategy {
  private container: HTMLElement;

  constructor(containerId: string = 'notifications-container') {
    this.container = document.getElementById(containerId) || document.body;
  }

  public send(message: string, type: NotificationType): void {
    const notification = this.createNotificationElement(message, type);
    this.container.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }

  private createNotificationElement(message: string, type: NotificationType): HTMLElement {
    const div = document.createElement('div');
    div.className = `notification ${type}`;
    div.textContent = message;
    return div;
  }
}

// Console Notification Strategy (for testing/debugging)
export class ConsoleNotificationStrategy implements INotificationStrategy {
  public send(message: string, type: NotificationType): void {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${type.toUpperCase()}: ${message}`);
  }
}

// Notification Service using Strategy Pattern
export class NotificationService {
  constructor(private strategy: INotificationStrategy) {}

  public setStrategy(strategy: INotificationStrategy): void {
    this.strategy = strategy;
  }

  public success(message: string): void {
    this.strategy.send(message, NotificationType.SUCCESS);
  }

  public error(message: string): void {
    this.strategy.send(message, NotificationType.ERROR);
  }

  public warning(message: string): void {
    this.strategy.send(message, NotificationType.WARNING);
  }

  public info(message: string): void {
    this.strategy.send(message, NotificationType.INFO);
  }
}