import { ICartItem, ICartRepository, IProduct } from '../interfaces/IProduct';
import { CartItem } from '../models/CartItem';
import { IObserver, ISubject } from '../interfaces/IObserver';

// Single Responsibility Principle (SRP) + Observer Pattern
// This class manages cart data and notifies observers of changes
export class CartRepository implements ICartRepository, ISubject<ICartItem[]> {
  private items: ICartItem[] = [];
  private observers: IObserver<ICartItem[]>[] = [];

  public getItems(): ICartItem[] {
    return [...this.items];
  }

  public addItem(product: IProduct): void {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push(CartItem.fromProduct(product));
    }
    
    this.notify(this.getItems());
  }

  public removeItem(productId: string): void {
    this.items = this.items.filter(item => item.id !== productId);
    this.notify(this.getItems());
  }

  public clear(): void {
    this.items = [];
    this.notify(this.getItems());
  }

  public getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  public getFormattedTotalPrice(): string {
    return `$${this.getTotalPrice().toFixed(2)}`;
  }

  // Observer Pattern Implementation
  public subscribe(observer: IObserver<ICartItem[]>): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: IObserver<ICartItem[]>): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  public notify(data: ICartItem[]): void {
    this.observers.forEach(observer => observer.update(data));
  }
}