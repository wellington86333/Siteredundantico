import { ICartItem, IProduct } from '../interfaces/IProduct';

// Single Responsibility Principle (SRP)
// This class represents a cart item with quantity
export class CartItem implements ICartItem {
  public quantity: number = 1;

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly category: string,
    quantity: number = 1
  ) {
    this.setQuantity(quantity);
  }

  public static fromProduct(product: IProduct, quantity: number = 1): CartItem {
    return new CartItem(
      product.id,
      product.name,
      product.description,
      product.price,
      product.category,
      quantity
    );
  }

  public setQuantity(quantity: number): void {
    if (quantity < 1) {
      throw new Error('Quantity must be at least 1');
    }
    this.quantity = quantity;
  }

  public getTotalPrice(): number {
    return this.price * this.quantity;
  }

  public getFormattedTotalPrice(): string {
    return `$${this.getTotalPrice().toFixed(2)}`;
  }
}