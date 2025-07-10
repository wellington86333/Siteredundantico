# Design Patterns & SOLID Principles Demo

Este projeto demonstra a implementação de **Design Patterns** e **Princípios SOLID** em TypeScript, criando um sistema de e-commerce funcional e bem estruturado.

## 🎯 Design Patterns Implementados

### 1. **Observer Pattern**
- **Localização**: `CartRepository` e `CartView`
- **Propósito**: O carrinho notifica automaticamente a view quando há mudanças
- **Benefício**: Desacoplamento entre modelo e visualização

### 2. **Strategy Pattern**
- **Localização**: `NotificationService` e estratégias de notificação
- **Propósito**: Permite trocar algoritmos de notificação em tempo de execução
- **Benefício**: Flexibilidade para diferentes tipos de notificação

### 3. **Factory Pattern**
- **Localização**: `ServiceFactory`
- **Propósito**: Centraliza a criação de objetos e suas dependências
- **Benefício**: Controle centralizado da criação de instâncias

### 4. **Singleton Pattern**
- **Localização**: `ServiceFactory`
- **Propósito**: Garante uma única instância da factory
- **Benefício**: Controle de recursos e configuração global

## 🏗️ Princípios SOLID Aplicados

### **S - Single Responsibility Principle (SRP)**
Cada classe tem uma única responsabilidade:
- `Product`: Representa um produto
- `CartRepository`: Gerencia dados do carrinho
- `ProductView`: Renderiza produtos
- `NotificationService`: Gerencia notificações

### **O - Open/Closed Principle (OCP)**
Classes abertas para extensão, fechadas para modificação:
- Novas estratégias de notificação podem ser adicionadas sem modificar código existente
- Novos tipos de produtos podem ser criados estendendo a interface base

### **L - Liskov Substitution Principle (LSP)**
Objetos podem ser substituídos por instâncias de suas subclasses:
- Qualquer implementação de `INotificationStrategy` pode ser usada
- Diferentes repositórios podem implementar as mesmas interfaces

### **I - Interface Segregation Principle (ISP)**
Interfaces específicas e focadas:
- `IProduct`: Apenas propriedades do produto
- `ICartRepository`: Apenas operações do carrinho
- `IObserver`: Apenas método de atualização

### **D - Dependency Inversion Principle (DIP)**
Dependência de abstrações, não de implementações concretas:
- `AppController` depende de interfaces, não de classes concretas
- Injeção de dependência através do construtor

## 🚀 Funcionalidades

- ✅ Catálogo de produtos responsivo
- ✅ Carrinho de compras interativo
- ✅ Sistema de notificações
- ✅ Processo de checkout simulado
- ✅ Interface moderna e intuitiva

## 🛠️ Tecnologias

- **TypeScript**: Tipagem estática e orientação a objetos
- **Vite**: Build tool moderno e rápido
- **CSS3**: Estilização moderna com gradientes e animações
- **HTML5**: Estrutura semântica

## 📁 Estrutura do Projeto

```
src/
├── controllers/     # Controladores da aplicação
├── factories/       # Factory para criação de serviços
├── interfaces/      # Contratos e abstrações
├── models/         # Modelos de dados
├── repositories/   # Acesso a dados
├── services/       # Lógica de negócio
├── views/          # Camada de apresentação
└── styles/         # Estilos CSS
```

## 🎓 Conceitos Demonstrados

1. **Separação de Responsabilidades**: Cada camada tem sua função específica
2. **Inversão de Controle**: Dependências injetadas via construtor
3. **Programação para Interfaces**: Uso de contratos ao invés de implementações
4. **Padrões de Comunicação**: Observer para atualizações reativas
5. **Flexibilidade**: Strategy para comportamentos intercambiáveis

Este projeto serve como exemplo prático de como aplicar boas práticas de desenvolvimento, resultando em código mais limpo, testável e manutenível.