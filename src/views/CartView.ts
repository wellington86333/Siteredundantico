import { ICartItem } from '../interfaces/IProduct';
import { IObserver } from '../interfaces/IObserver';

// Single Responsibility Principle (SRP) + Observer Pattern
// This class is responsible only for rendering the cart and observing cart changes
export class CartView implements IObserver<ICartItem[]> {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
  }

  // Observer Pattern - update when cart changes
  public update(items: ICartItem[]): void {
    this.render(items);
  }

  public render(items: ICartItem[]): void {
    if (items.length === 0) {
      this.container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
      return;
    }

    this.container.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">
            ${item.quantity} × $${item.price.toFixed(2)} = ${item.getFormattedTotalPrice()}
          </div>
        </div>
        <button class="btn btn-secondary" onclick="window.app.removeFromCart('${item.id}')">
          Remove
        </button>
      </div>
    `).join('');
  }
}