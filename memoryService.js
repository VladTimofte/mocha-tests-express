// memoryService.js
import Calculator from './calculator.js';

export default class MemoryService {
  constructor() {
    this.calculator = new Calculator();
    this.memory = [];
  }

  performOperation(op, a, b) {
    let result;
    switch (op) {
      case 'add':
        result = this.calculator.add(a, b);
        break;
      case 'subtract':
        result = this.calculator.subtract(a, b);
        break;
      case 'multiply':
        result = this.calculator.multiply(a, b);
        break;
      case 'divide':
        result = this.calculator.divide(a, b);
        break;
      default:
        throw new Error('Invalid operation');
    }
    this.memory.push(result);
    return result;
  }

  getMemory() {
    return this.memory;
  }
}
