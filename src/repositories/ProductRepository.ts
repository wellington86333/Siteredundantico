import { IProduct, IProductRepository } from '../interfaces/IProduct';
import { Product } from '../models/Product';

// Single Responsibility Principle (SRP)
// This class is responsible only for product data access
export class ProductRepository implements IProductRepository {
  private products: IProduct[] = [
    new Product('1', 'Laptop Pro', 'High-performance laptop for professionals', 1299.99, 'Electronics'),
    new Product('2', 'Wireless Headphones', 'Premium noise-canceling headphones', 299.99, 'Electronics'),
    new Product('3', 'Coffee Maker', 'Automatic drip coffee maker with timer', 89.99, 'Appliances'),
    new Product('4', 'Running Shoes', 'Lightweight running shoes for athletes', 129.99, 'Sports'),
    new Product('5', 'Smartphone', 'Latest smartphone with advanced camera', 899.99, 'Electronics'),
    new Product('6', 'Yoga Mat', 'Non-slip yoga mat for home workouts', 39.99, 'Sports')
  ];

  public async findAll(): Promise<IProduct[]> {
    // Simulate async operation
    return new Promise(resolve => {
      setTimeout(() => resolve([...this.products]), 100);
    });
  }

  public async findById(id: string): Promise<IProduct | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        const product = this.products.find(p => p.id === id) || null;
        resolve(product);
      }, 50);
    });
  }

  public async findByCategory(category: string): Promise<IProduct[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        const filtered = this.products.filter(p => p.category === category);
        resolve(filtered);
      }, 100);
    });
  }
}