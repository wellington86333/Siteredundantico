import { IProduct } from '../interfaces/IProduct';

// Single Responsibility Principle (SRP)
// This class is responsible only for rendering products
export class ProductView {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
  }

  public render(products: IProduct[], onAddToCart: (product: IProduct) => void): void {
    this.container.innerHTML = '';
    
    products.forEach(product => {
      const productElement = this.createProductElement(product, onAddToCart);
      this.container.appendChild(productElement);
    });
  }

  private createProductElement(product: IProduct, onAddToCart: (product: IProduct) => void): HTMLElement {
    const div = document.createElement('div');
    div.className = 'product-card';
    
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-price">${product.price.toFixed(2)}</div>
      <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
    `;
    
    const button = div.querySelector('.add-to-cart-btn') as HTMLButtonElement;
    button.addEventListener('click', () => onAddToCart(product));
    
    return div;
  }
}