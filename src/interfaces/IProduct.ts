// Interface Segregation Principle (ISP)
// Interfaces are focused and specific to their use cases

export interface IProduct {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly category: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IProductRepository {
  findAll(): Promise<IProduct[]>;
  findById(id: string): Promise<IProduct | null>;
  findByCategory(category: string): Promise<IProduct[]>;
}

export interface ICartRepository {
  getItems(): ICartItem[];
  addItem(product: IProduct): void;
  removeItem(productId: string): void;
  clear(): void;
  getTotalPrice(): number;
}