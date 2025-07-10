// Factory Pattern + Dependency Injection
// This factory creates and configures all services with their dependencies

import { ProductRepository } from '../repositories/ProductRepository';
import { CartRepository } from '../repositories/CartRepository';
import { NotificationService, DOMNotificationStrategy } from '../services/NotificationService';
import { AppController } from '../controllers/AppController';

export class ServiceFactory {
  private static instance: ServiceFactory;
  
  // Singleton Pattern
  public static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      ServiceFactory.instance = new ServiceFactory();
    }
    return ServiceFactory.instance;
  }

  private constructor() {}

  // Factory Method Pattern
  public createAppController(): AppController {
    // Dependency Injection - inject dependencies into classes
    const productRepository = new ProductRepository();
    const cartRepository = new CartRepository();
    const notificationStrategy = new DOMNotificationStrategy();
    const notificationService = new NotificationService(notificationStrategy);
    
    return new AppController(
      productRepository,
      cartRepository,
      notificationService
    );
  }
}