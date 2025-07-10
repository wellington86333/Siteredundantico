import { ServiceFactory } from './factories/ServiceFactory';

// Application Entry Point
// Demonstrates Dependency Injection and Factory Pattern usage

class Application {
  private controller: any;

  public async start(): Promise<void> {
    try {
      // Factory Pattern - create controller with all dependencies
      const factory = ServiceFactory.getInstance();
      this.controller = factory.createAppController();
      
      // Make controller available globally for HTML event handlers
      (window as any).app = this.controller;
      
      // Initialize the application
      await this.controller.initialize();
      
      console.log('🎉 Application started successfully!');
      console.log('📋 Design Patterns implemented:');
      console.log('   • Observer Pattern (Cart updates)');
      console.log('   • Strategy Pattern (Notifications)');
      console.log('   • Factory Pattern (Service creation)');
      console.log('   • Singleton Pattern (ServiceFactory)');
      console.log('🏗️ SOLID Principles applied:');
      console.log('   • Single Responsibility Principle');
      console.log('   • Open/Closed Principle');
      console.log('   • Liskov Substitution Principle');
      console.log('   • Interface Segregation Principle');
      console.log('   • Dependency Inversion Principle');
      
    } catch (error) {
      console.error('Failed to start application:', error);
    }
  }
}

// Start the application
const app = new Application();
app.start();