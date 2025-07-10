import { IProductRepository, ICartRepository } from '../interfaces/IProduct';
import { ProductView } from '../views/ProductView';
import { CartView } from '../views/CartView';
import { NotificationService } from '../services/NotificationService';
import { CheckoutService } from '../services/CheckoutService';

// Single Responsibility Principle (SRP)
// This controller coordinates the application flow
export class AppController {
  private productView: ProductView;
  private cartView: CartView;
  private checkoutService: CheckoutService;

  constructor(
    private productRepository: IProductRepository,
    private cartRepository: ICartRepository,
    private notificationService: NotificationService
  ) {
    this.productView = new ProductView('products-container');
    this.cartView = new CartView('cart-container');
    this.checkoutService = new CheckoutService(cartRepository, notificationService);
    
    // Observer Pattern - cart view observes cart changes
    this.cartRepository.subscribe(this.cartView);
    
    this.setupEventListeners();
  }

  public async initialize(): Promise<void> {
    try {
      const products = await this.productRepository.findAll();
      this.productView.render(products, (product) => this.addToCart(product));
      this.cartView.render(this.cartRepository.getItems());
      this.notificationService.success('Application loaded successfully!');
    } catch (error) {
      this.notificationService.error('Failed to load products');
    }
  }

  public addToCart(product: any): void {
    this.cartRepository.addItem(product);
    this.notificationService.success(`${product.name} added to cart!`);
  }

  public removeFromCart(productId: string): void {
    this.cartRepository.removeItem(productId);
    this.notificationService.info('Item removed from cart');
  }

  public clearCart(): void {
    this.cartRepository.clear();
    this.notificationService.info('Cart cleared');
  }

  public async checkout(): Promise<void> {
    const checkoutBtn = document.getElementById('checkout-btn') as HTMLButtonElement;
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = 'Processing...';
    
    try {
      await this.checkoutService.processCheckout();
    } finally {
      checkoutBtn.disabled = false;
      checkoutBtn.textContent = 'Checkout';
    }
  }

  private setupEventListeners(): void {
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    
    checkoutBtn?.addEventListener('click', () => this.checkout());
    clearCartBtn?.addEventListener('click', () => this.clearCart());
  }
}