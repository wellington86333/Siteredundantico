import { ICartRepository } from '../interfaces/IProduct';
import { NotificationService } from './NotificationService';

// Single Responsibility Principle (SRP)
// This service handles checkout logic
export class CheckoutService {
  constructor(
    private cartRepository: ICartRepository,
    private notificationService: NotificationService
  ) {}

  public async processCheckout(): Promise<boolean> {
    try {
      const items = this.cartRepository.getItems();
      
      if (items.length === 0) {
        this.notificationService.warning('Your cart is empty!');
        return false;
      }

      // Simulate payment processing
      await this.simulatePaymentProcessing();
      
      const total = this.cartRepository.getFormattedTotalPrice();
      this.notificationService.success(`Order completed! Total: ${total}`);
      
      // Clear cart after successful checkout
      this.cartRepository.clear();
      
      return true;
    } catch (error) {
      this.notificationService.error('Checkout failed. Please try again.');
      return false;
    }
  }

  private async simulatePaymentProcessing(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Payment processing failed'));
        }
      }, 1500);
    });
  }
}