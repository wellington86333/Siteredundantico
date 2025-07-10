import { IProduct } from '../interfaces/IProduct';

// Single Responsibility Principle (SRP)
// This class has only one responsibility: represent a product
export class Product implements IProduct {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly category: string
  ) {
    this.validatePrice(price);
  }

  private validatePrice(price: number): void {
    if (price < 0) {
      throw new Error('Price cannot be negative');
    }
  }

  public getFormattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}